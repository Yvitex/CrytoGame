import "./sendTextInput.styles.scss";
import {ReactComponent as Send} from "../../assets/svg/Send.svg";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user.context";


const SendTextInput = ({onClickButton}) => {


    return (
        <div className="send_text_input_container">
            <input className="send_text_input" />
            <button className="send_text_input_button">
                <Send />
            </button>
        </div>
    )
}

export default SendTextInput;