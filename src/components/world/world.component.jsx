import "./world.styles.scss";
import {ReactComponent as Circle} from "../../assets/svg/circle.svg"
import { ReactComponent as Square } from "../../assets/svg/square.svg";


const World = () => {
    return (
        <div className="world_container">
            <img src="/world.png" alt="Earth" />
            <img className="rick" src="/never_gonna.png" alt="Never Gonna Give you Up" />
            <img className="pacman_ghost" src="pacman.png" alt="Pacman Ghost" />
            <Circle className="circle2" />
            <Square className="square2" />
        </div>
    )
}

export default World;