import "./downloadOrExit.styles.scss";
import { ReactComponent as Exit } from "../../assets/svg/exit.svg";
import { ReactComponent as Download } from "../../assets/svg/download.svg";
import TitleMeta from "../titleMeta/titleMeta.component";
import Requirement from "../requirement/requirement.component";
import { Link } from "react-router-dom";

const DownloadOrExitBox = ({title, size}) => {
    return (
        <div className="play_container">
            <h1>Download the App Now!</h1>
            <div className="download_or_exit_container">
                <div className="download_or_exit_content">
                    <TitleMeta title={title} meta={`Size: ${size}`} />
                    <Requirement
                        requirementTitle="Software Requirement"
                        rest={[
                            "Operating System: Windows 7 and later versions",
                            "RAM memory: 1GB",
                            "Free disk space: 250MB"
                        ]}
                    />
                </div>
                <div className="icon_button">
                    <Link to="/"><Exit className="icon" /></Link>
                    <a href="https://drive.google.com/u/0/uc?id=1HXWYl9XuOuB8FNRSGtbGhrGi4I7YCZNj&export=download" target="_null"><Download className="icon" /> </a>
                </div>
            </div>
        </div>
    )
}

export default DownloadOrExitBox;