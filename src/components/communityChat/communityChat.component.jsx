import "./communityChat.styles.scss";

import ChatHead from "../chatHeads/chatHeads.component";
import SendTextInput from "../sendTextInput/sendTextInput.component";
import { UserContext } from "../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../context/token.context";
import Spinner from "../spinner/spinner.component";


const CommunityChat = ({title}) => {
    const {setIsLoggingIn, user} = useContext(UserContext);
    const {websiteContract} = useContext(TokenContext);
    const [isLoadingSend, setIsLoadingSend] = useState(false);
    const [isLoadingMessages, setIsLoadingMessages] = useState(false);
    const [message, setMessage] = useState("");
    const [messageLimit, setMessageLimit] = useState(10);
    const [previousMessages, setPreviousMessages] = useState([]);

    useEffect(() => {
        const {ethereum} = window;
        if(!ethereum) {
            setIsLoggingIn(true);
        }

    }, [websiteContract])

    useEffect(() => {
        const fetchPreviousMessage = async() => {
            try {
                setIsLoadingMessages(true);
                if(!websiteContract) {
                    return;
                }

                let waiter = await websiteContract.getAllHello();
                setPreviousMessages(waiter);
                setIsLoadingMessages(false);
            } catch (error) {
                console.log(error)
                setIsLoadingMessages(false);
                return;
            }
            
        }

        fetchPreviousMessage();
    }, [isLoadingSend, user])

    const announceWinOrLose = () => {
        return;
    }

    const sendSomething = async (someString) => {
        setIsLoadingSend(true);

        try {
            if(!websiteContract) {
                alert("Contract not Available");
                return;
            }
    
            let waiter = await websiteContract.sendHello(someString);
            await waiter.wait();
    
            setIsLoadingSend(false);
            setMessage("Thank you For Joining");
        } catch (error) {
            console.log(error);
            setIsLoadingSend(false);
            return;
        }
        
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const chatRenderer = () => {
        let chats = []
        for(let i = 0; i < previousMessages.length; i++) {
            let address = previousMessages[i].sender;
            let message = previousMessages[i].message;

            chats.push(<ChatHead key={i} address={address} text={message} status={false} />)
        }
        return chats;
    }

    return (
        <div className="community_chat_container">
            {user ? (
                <>
                    <h1>{title}</h1>
                    <SendTextInput onClickButton={() => sendSomething(message)} handleChange={handleChange} />
                    {message.length > 32 && (<p className="error">Recommended input is 32 characters</p>)}
                    {isLoadingSend && <Spinner textLoading="Sending..." />}
                    {isLoadingMessages ? (<Spinner />) : chatRenderer()}
                </> 
            ) : (
                <div className="lock_message">
                    <h1 className="error">Please Log In Before Using the Community Chat</h1>
                    <p>Make Sure You are In Georli Network</p>
                    <img src="/lock.png" alt="Lock" />
                </div>
            )}

        </div>
    )
}

export default CommunityChat;