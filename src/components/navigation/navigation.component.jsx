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
                <a href="https://drive.google.com/file/d/1htJxLX_a7-OiwIkTt1YhXsScuzYeGTM2/view?usp=share_link" target="_blank"><p className="navigation_text">Roadmap</p></a>
                <a href="https://drive.google.com/file/d/1Xj75_N_1-aWWsdY1fQ9iyRclxuqZ-WxR/view?usp=share_link" target="_blank"><p className="navigation_text">White Paper</p></a>
                <p onClick={openMetamask} className="navigation_text">{isLoggingIn ? "Exit" : "Log In"}</p>
            </div>
        </div>
    )
}

export default Navigation;