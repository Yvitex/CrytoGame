import "./promotionalBox.styles.scss";
import ContentButton from "../contentButton/contentButton.component";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {ReactComponent as Circle} from "../../assets/svg/circle.svg"
import { ReactComponent as Square } from "../../assets/svg/square.svg";

const PromotionalBox = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: ".promotional_box_container",
            start: "top 60%",
        }})

        .fromTo(".promotional_box_container", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })

        .to(".promotional_box_container .rick", {
            x: 120,
            y: -50,
            duration: 1
        }, "-=0.6")

        .to(".promotional_box_container .pacman_ghost", {
            x: -70,
            y: -50,
            duration: 1
        }, "-=0.5")

        .to(".promotional_box_container .circle2", {
            x: -100,
            y: 0,
            duration: 1,
            opacity: 1
        }, "-=1")

        .to(".promotional_box_container .square2", {
            x: 20,
            y: -80,
            duration: 1,
            opacity: 1
        }, "-=1")
    }, [])

    return (
        <div className="promotional_box_container">
            <div className="world_container">
                <img src="/world.png" alt="Earth" />
                <img className="rick" src="/never_gonna.png" alt="Never Gonna Give you Up" />
                <img className="pacman_ghost" src="pacman.png" alt="Pacman Ghost" />
                <Circle className="circle2" />
                <Square className="square2" />
            </div>
            <div>
                <ContentButton 
                    title="Promo:" 
                    intro="Get a chance to  win 10 tokens by saying Hello on the community chatbox" 
                    buttonText="Send Hello"
                    buttonClass="darkGreenButton"
                />
            </div>
        </div>
    )
}

export default PromotionalBox;