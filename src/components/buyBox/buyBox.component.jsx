import "./buyBox.styles.scss";
import Button from "../button/button.component";
import { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../context/token.context";
import abi from "../../assets/abi/WebsiteContract.json";
import { ethers } from "ethers";
import Spinner from "../spinner/spinner.component";
import { UserContext } from "../../context/user.context";

const BuyBox = () => {
    const [amount, setAmount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(0);
    const {websiteContract, setWebsiteContract} = useContext(TokenContext);
    const contractAddress = "0xfdA8D0c4d7d787edDbD25Fc201F00EDdEd4c57B5";
    const {user} = useContext(UserContext);

    const convertedToken = userToken / Math.pow(10, 18);
    
    const handleOnChange = (event) => {
        setAmount(event.target.value)
    }

    const buyToken = async (userAmount) => {
        let amount = userAmount * Math.pow(10, 18);
        try {
            setIsLoading(true);

            if(!user) {
                alert("Please Log In first");
                setIsLoading(false);
                return;
            }

            if(websiteContract && user) {
                let waiter = await websiteContract.buyToken({value: amount, gasLimit: 300000});
                await waiter.wait();
            }

        } catch (error) {
            console.log(error);
            setIsLoading(false);
            return;
        }
        setIsLoading(false);
    }

    useEffect(() => {
        const getTokenAmount = async() => {
            if (user && websiteContract) {
                const token = await websiteContract.viewTokenFromAddress(user);
                setUserToken(token);
            }
        }
        getTokenAmount();
    }, [user, isLoading])

    useEffect(() => {
        const initWebsiteContract = async() => {
            try {
                const {ethereum} = window;

                if(!ethereum){
                    alert("An error has Occured");
                    return;
                }

                if(!websiteContract) {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const importedContract = new ethers.Contract(contractAddress, abi.abi, signer);
                    setWebsiteContract(importedContract);
                }

            } catch (error) {
                console.log(error);
                return;
            }
        }

        initWebsiteContract();
        
    }, [])

    return (
        <div className="buy_box_container">
            <p>Buy Token Using Eth</p>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={handleOnChange}
                />  
            {amount >= 0.00002 ? (
                <p className="good">You'll receive {((amount * Math.pow(10, 18)) / 10000000000).toString()} Token</p>
            ) : (
                <p className="warning">Must not be less than 0.00002</p>
            )
                
            }
            
            <Button buttonText="Request" otherOnClick={() => {buyToken(amount)}} />
            <p>You already have {(convertedToken * 100).toString()} Token in Wallet</p>
            {isLoading && <Spinner />}
        </div>
    )
}

export default BuyBox;