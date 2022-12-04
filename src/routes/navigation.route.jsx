import GameTitle from "../components/gameTitle/gameTitle.component";
import Navigation from "../components/navigation/navigation.component";
import Indorsement from "../components/indorsement/indorsement.component";
import PromotionalBox from "../components/promotionalBox/promotionalBox.component";

const NavigationRoute = () => {
    return (
        <div className="navigation_route_container">
            <Navigation />
            <GameTitle 
                title="Game Title"
                intro="The best arcade games to past time"
                buttonText="Play"
            />
            <Indorsement indorseText={"Earn by playing old school and classic games that you’ll enjoy"} />
            <PromotionalBox />
        </div>
    )
}

export default NavigationRoute;