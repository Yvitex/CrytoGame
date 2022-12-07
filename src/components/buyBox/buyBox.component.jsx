import "./buyBox.styles.scss";
import Button from "../button/button.component";
import { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../context/token.context";
import abi from "../../assets/abi/WebsiteContract.json";
import { ethers } from "ethers";
import Spinner from "../spinner/spinner.component";
import { UserContext } from "../../context/user.context";
import OwnedToken from "../ownedToken/ownedToken.component";
import { initContract } from "../../utils/initializeContract";
import { contractAddress } from "../../utils/initializeContract";

const BuyBox = () => {
    const [amount, setAmount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const {websiteContract, setWebsiteContract} = useContext(TokenContext);
    const {setIsLoggingIn} = useContext(UserContext);
    const {user} = useContext(UserContext);
    
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
        const initWebsiteContract = async() => {

            const {ethereum} = window;

            if(!ethereum){
                setIsLoggingIn(true);
                return;
            }

        }

        initWebsiteContract();
        
    }, [])


    return (
        <div className="buy_box_container">
            <p className="intro">Buy Token Using Eth</p>
            <p className="contract_address">Contract Address: {contractAddress}</p>
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
            <OwnedToken isLoading={isLoading} />
            {isLoading && <Spinner />}
        </div>
    )
}

export default BuyBox;