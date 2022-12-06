import "./faceStatus.style.scss";
import {ReactComponent as Sad} from "../../assets/svg/Sad.svg";
import {ReactComponent as Smile} from "../../assets/svg/Smile.svg";

const FaceStatus = ({status, textPos="Won", textNeg="Lose"}) => {
    return (
        <div className="face_container">
            {status ? <Smile  /> : <Sad />}
            {status ? <p className="pos">{textPos}</p>: <p className="neg">{textNeg}</p>}
        </div>
    )
}

export default FaceStatus;