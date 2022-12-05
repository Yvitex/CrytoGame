
import Navigation from "../components/navigation/navigation.component";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user.context";
import Metamask from "../components/metamask/metamask.component";

const NavigationRoute = () => {
    const {isLoggingIn} = useContext(UserContext);
    return (
        <div className="navigation_route_container">
            <Navigation />
            {isLoggingIn && (<Metamask />)}
           <Outlet />
        </div>
    )
}

export default NavigationRoute;