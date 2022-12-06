import "./chatHead.styles.scss";
import FaceStatus from "../faceStatus/faceStatus.component";

const ChatHead = ({address, text, status}) => {
    return (
        <div className="chat_head_container">
            <FaceStatus status={status} />
            <div className="text_container">
                <p className="address">{address}</p>
                <p className="text">{text}</p>
            </div>
        </div>
    )
}

export default ChatHead;