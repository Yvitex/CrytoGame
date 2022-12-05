import "./contentButton.styles.scss"
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const ContentButton = ({
        title, 
        intro, 
        buttonText, 
        buttonClass, 
        animated=false,
        navigateUrl
    }) => {

    return (
        <>
            <h1 className={animated ? "game_title_text" : ""}>{title}</h1>
            <p className={animated ? "intro_text" : ""}>{intro}</p>
            <Button className={animated ? "playButton": ""} buttonText={buttonText} specClass={buttonClass} navigateUrl={navigateUrl} />
        </>
    )
}

export default ContentButton;