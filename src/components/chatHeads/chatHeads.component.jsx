import "./chatHead.styles.scss";
import FaceStatus from "../faceStatus/faceStatus.component";

const ChatHead = ({address, text, status}) => {
    return (
        <div className="chat_head_container">
            <FaceStatus status={status} />
            <div className="text_container">
                <p className="address">{address.slice(0, 5) + "..."}</p>
                <p className="text">{text.slice(0, 40)} {text.length > 40 && "..."}</p>
            </div>
        </div>
    )
}

export default ChatHead;