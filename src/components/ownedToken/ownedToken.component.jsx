import "./ownedToken.styles.scss";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { TokenContext } from "../../context/token.context";
import { getChainId } from "../../utils/initializeContract";

const OwnedToken = ({isLoading = false}) => {

    const {user} = useContext(UserContext);
    const {websiteContract, chainId, setChainId} = useContext(TokenContext);
    const [userToken, setUserToken] = useState(0);

    const convertedToken = userToken / Math.pow(10, 18);

    useEffect(() => {
        const getTokenAmount = async() => {
            try {
                if (user && websiteContract) {
                    const token = await websiteContract.viewTokenFromAddress(user);
                    setUserToken(token);
                }
            } catch (error) {
                console.log(error);
            }
            
        }
        getTokenAmount();
    }, [user, isLoading])

    useEffect(() => {
        const fetchChainId = async() => {
            try {
                const fetchedChainId = await getChainId();        
                setChainId(fetchedChainId);
            } catch (error) {
                console.log(error);
            }
        }

        fetchChainId();

    }, [])

    console.log("CHL", chainId);

    const displayText = (amount) => {

        if(chainId !== 5) {
            return <p>Switch to Goerli Network</p>
        }

        else if (!user) {
            return <p>Log in to see your tokens</p>
        }
        

        else if (user && amount == 0) {
            return <p>You don't have token in wallet</p>
        }

        else if (user && amount > 0) {
            return <p>You already have {(amount * 100).toString()} Token in Wallet</p>
        }
    }


    return (
        <div className="owned_token_container">
            {displayText(convertedToken)}
        </div>
    )
}

export default OwnedToken;