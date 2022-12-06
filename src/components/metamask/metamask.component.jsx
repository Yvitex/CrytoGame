import "./metamask.style.scss";
import {ReactComponent as MetamaskIcon} from "../../assets/svg/metamask.svg";
import Button from "../button/button.component";
import { useEffect } from "react";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import gsap from "gsap";
import { Back } from "gsap";
import { TokenContext } from "../../context/token.context";
import { initContract } from "../../utils/initializeContract";

const findMetamaskAccount = async () => {
    try {
        const {ethereum} = window;

        if(!ethereum) {
            return null;
        }

        console.log("Ethereum Object Fetch of Method findMetamaskAccount: " + ethereum );
        const accounts = await ethereum.request({method: "eth_accounts"});

        if(accounts.length !== 0) {
            let account = accounts[0];
            console.log("Found account on function findMetamaskAccount: " + account);
            return account
        }
        else {
            console.log("No account on function findMetamaskAccount: ");
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}


const Metamask = () => {
    const {ethereum} = window;
    const {setUser, user} = useContext(UserContext);
    const {setWebsiteContract, websiteContract} = useContext(TokenContext);

    useEffect(() => {
        const fetchAccounts = async() => {
            const account = await findMetamaskAccount();
            setUser(account);
        }
        fetchAccounts();
    }, [])

    useEffect(() => {
        const initWebsiteContract = async() => {
            try {

                if(!websiteContract) {
                    setWebsiteContract(initContract());
                }

            } catch (error) {
                console.log(error);
                return;
            }
        }

        initWebsiteContract();
    }, [])


    useEffect(() => {
        gsap.fromTo(".metamask_container", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: Back.easeOut.config(2)
        })
    }, [])
    

    const logInWithMetamask = async() => {
        try {
            const {ethereum} = window;

            if(!ethereum) {
                alert("Download Metamask!!");
                return;
            }
    
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            console.log("logInWithMetamask fetched this account: " + accounts[0]);
            setUser(accounts[0]);
        } catch (error) {
            console.log(error);
            return;
        }
    }

    return (
        <div className="metamask_container">
            <p>LogIn With Metamask</p>
            <MetamaskIcon />
            <Button buttonText={user !== null ? user.toString().slice(0, 6) + "..." : "Log In"} otherOnClick={logInWithMetamask} />

            {!ethereum && (
                <a href="https://metamask.io/download/" rel="noreferrer" target="_blank">
                    <Button buttonText="Install Metamask" />
                </a>)}
        </div>
    )
}

export default Metamask;