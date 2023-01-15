import "./communityChat.styles.scss";

import ChatHead from "../chatHeads/chatHeads.component";
import SendTextInput from "../sendTextInput/sendTextInput.component";
import { UserContext } from "../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../context/token.context";
import Spinner from "../spinner/spinner.component";


const CommunityChat = ({title}) => {
    const {setIsLoggingIn, user, isLoggingIn} = useContext(UserContext);
    const {websiteContract, chainId} = useContext(TokenContext);
    const [isLoadingSend, setIsLoadingSend] = useState(false);
    const [isLoadingMessages, setIsLoadingMessages] = useState(false);
    const [message, setMessage] = useState("");
    const [messageLimit, setMessageLimit] = useState(10);
    const [previousMessages, setPreviousMessages] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const {ethereum} = window;

    useEffect(() => {
        const {ethereum} = window;
        if(!ethereum) {
            setIsLoggingIn(true);
        }

    }, [websiteContract])


    if(ethereum) {
        window.ethereum.on('chainChanged', function(networkId){
            return;
        });
    }



    useEffect(() => {
        if(websiteContract) {
            websiteContract.on("SomebodyWonTokens", announceWinOrLose);
        }

        return () => {
            if(websiteContract) {
                websiteContract.off("SomebodyWonTokens", announceWinOrLose);
            }
        }
    })


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

    }, [user, chainId, trigger])

    const announceWinOrLose = () => {
        setTrigger(!trigger);
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
            setMessage("");
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
        let limiter = previousMessages.length;
        if (previousMessages.length > messageLimit) {
            limiter = messageLimit;
        }
        for(let i = limiter - 1; i >= 0; i--) {
            let address = previousMessages[i].sender;
            let message = previousMessages[i].message;
            let didWin = previousMessages[i].didWin;

            chats.push(<ChatHead key={i} address={address} text={message} status={didWin} />)
        }
        if(previousMessages.length == 0) {
            return <p>No Messages</p>
        }
        return chats;
    }

    return (
        <div className="community_chat_container">
            {!ethereum && <p>Install Metamask</p>}
            {user && chainId == 5 ? (
                <>
                    <h1>{title}</h1>
                    <SendTextInput onClickButton={() => sendSomething(message)} handleChange={handleChange} value={message} />
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