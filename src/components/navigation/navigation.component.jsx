import "./navigation.styles.scss"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const Navigation = () => {

    const {setIsLoggingIn, isLoggingIn} = useContext(UserContext);

    const openMetamask = () => {
        setIsLoggingIn(!isLoggingIn);
    }

    return (
        <div className="navigation_container">
            <div className="navigation"> 
                <Link to="/"><p className="navigation_text">Home</p></Link>
                <Link to="play"><p className="navigation_text">Play</p></Link>
                <Link to="buy"><p className="navigation_text">Buy</p></Link>
                <Link to="roadmap"><p className="navigation_text">Roadmap</p></Link>
                <a href="https://drive.google.com/file/d/1zmF0-k0LlgBV7KomuD8I97jVRzJwfbq_/view?usp=sharing" target="_blank"><p className="navigation_text">White Paper</p></a>
                <p onClick={openMetamask} className="navigation_text">{isLoggingIn ? "Exit" : "Log In"}</p>
            </div>
        </div>
    )
}

export default Navigation;