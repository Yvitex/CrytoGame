import { useNavigate } from "react-router-dom";
import "./button.styles.scss"

const Button = ({buttonText, specClass="playButton", navigateUrl, otherOnClick}) => {
    const navigate = useNavigate();
    let navigateTo = null;

    if(navigateUrl) {
        navigateTo = (url) => {
            navigate(url);
        }
    }

    return (
        <button className={specClass} onClick={navigateUrl ? (() => navigateTo(navigateUrl)) : otherOnClick} >{buttonText}</button>
    )
}

export default Button;