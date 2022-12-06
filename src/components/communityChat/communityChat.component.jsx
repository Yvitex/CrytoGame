import "./communityChat.styles.scss";

import ChatHead from "../chatHeads/chatHeads.component";
import SendTextInput from "../sendTextInput/sendTextInput.component";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { useEffect } from "react";

const CommunityChat = ({title}) => {

    const {setIsLoggingIn, user} = useContext(UserContext);

    useEffect(() => {
        const {ethereum} = window;
        if(!ethereum) {
            setIsLoggingIn(true);
        }
    }, [])

    return (
        <div className="community_chat_container">
            {user ? (
                <>
                    <h1>{title}</h1>
                    <SendTextInput />
                    <ChatHead address="0x1121" text="geladadeasdas" status={false} />
                    <ChatHead address="0x1121" text="geladadeasdas" status={true} />
                </> 
            ) : (
                <div className="lock_message">
                    <h1 className="error">Please Log In Before Using the Community Chat</h1>
                    <img src="/lock.png" alt="Lock" />
                </div>
            )}

        </div>
    )
}

export default CommunityChat;