import "./navigation.styles.scss"
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
                <Link to="play"><p className="navigation_text">Play</p></Link>
                <p className="navigation_text">Buy</p>
                <p className="navigation_text">Roadmap</p>
                <p className="navigation_text">White Paper</p>
                <p onClick={openMetamask} className="navigation_text">{isLoggingIn ? "Exit" : "Log In"}</p>
            </div>
        </div>
    )
}

export default Navigation;