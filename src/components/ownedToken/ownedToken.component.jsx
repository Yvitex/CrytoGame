import "./ownedToken.styles.scss";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { TokenContext } from "../../context/token.context";

const OwnedToken = ({isLoading = false}) => {

    const {user} = useContext(UserContext);
    const {websiteContract} = useContext(TokenContext);
    const [userToken, setUserToken] = useState(0);

    const convertedToken = userToken / Math.pow(10, 18);

    useEffect(() => {
        const getTokenAmount = async() => {
            if (user && websiteContract) {
                const token = await websiteContract.viewTokenFromAddress(user);
                setUserToken(token);
            }
        }
        getTokenAmount();
    }, [user, isLoading])

    const displayText = (amount) => {
        if (!user) {
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