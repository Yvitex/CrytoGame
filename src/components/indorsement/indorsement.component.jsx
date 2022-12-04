import "./indorsement.styles.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import TextPlugin from "gsap/TextPlugin";
import gsap from "gsap";
import { Back } from "gsap";

const Indorsement = ({indorseText}) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: ".indorse_text_container",
            start: "top 80%",            
        }})
        
        .fromTo(".indorse_text_container", {
            text: "",
        }, {
            text: indorseText,
            duration: 5
        }, "-0.2")

        .fromTo(".coin", {
            y: 100,
            opacity: 0,
        }, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: Back.easeOut.config(1.7)
        })

        .fromTo(".pacman1", {
            y: 100,
            opacity: 0,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: Back.easeOut.config(1.7)
        })

        .fromTo(".pacman2", {
            y: 100,
            opacity: 0,
        }, {
            duration: 1.2,
            opacity: 1,
            y: 0,
            ease: Back.easeOut.config(1.7)
        }, "-=1")
    }, [])

    return (
        <div className="indorsement_container">
            <img className="pacman1" src="/pacman.png" alt="Pacman"/>
            <h2 className="indorse_text_container">{indorseText}</h2>
            <img className="pacman2" src="/pacman.png" alt="Pacman"/>
            <img className="coin" src="/GoldCoin.png" alt="Gold Coin" />
        </div>
    )
}

export default Indorsement;