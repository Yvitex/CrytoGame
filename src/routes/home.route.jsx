import GameTitle from "../components/gameTitle/gameTitle.component";
import Indorsement from "../components/indorsement/indorsement.component";
import PromotionalBox from "../components/promotionalBox/promotionalBox.component";

const Home = () => {
    return (
        <div>
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

export default Home;