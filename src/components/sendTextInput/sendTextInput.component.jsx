import "./sendTextInput.styles.scss";
import {ReactComponent as Send} from "../../assets/svg/Send.svg";

const SendTextInput = ({onClickButton, handleChange}) => {

    return (
        <div className="send_text_input_container">
            <input onChange={handleChange} className="send_text_input" />
            <button onClick={onClickButton} className="send_text_input_button">
                <Send />
            </button>
        </div>
    )
}

export default SendTextInput;