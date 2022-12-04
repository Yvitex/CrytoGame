import Button from "../button/button.component";
import "./gameTitle.styles.scss"
import CoinModel from "../coinModel/coinModel.component";
import {ReactComponent as Square} from "../../assets/svg/square.svg"
import {ReactComponent as Circle} from "../../assets/svg/circle.svg"
import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ContentButton from "../contentButton/contentButton.component";


const GameTitle = ({title, intro, buttonText}) => {

    useEffect(() => {
        gsap.registerPlugin(TextPlugin);

        gsap.timeline()
            .fromTo(".game_title_container .circle", {
                y: 300,
                opacity: 0
            }, {
                y: 0,
                duration: 3,
                opacity: 0.3
            })

            .fromTo(".header_container .game_title_container .square", {
                y: 200,
                opacity: 0
            }, {
                y: 0,
                duration: 2,
                opacity: 0.4,
            }, "-=2")

            .fromTo(".game_title_text", {
                text: ""
            }, {
                text: title,
                duration: 2
                }, "-=1")

            .fromTo(".intro_text", {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            })

            .fromTo(".playButton", {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            }, "-=0.2")

            .fromTo(".heading_canvas", {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 4
            }, "-=0.2")
            
        gsap.to(".square", {
            rotation: 360,
            duration: 60,
            repeat: -1,
        })
            

    }, [])


    return (
        <div className="header_container">
            <div>
               <CoinModel />
            </div>
            <div className="game_title_container">
                <ContentButton title={title} intro={intro} buttonText={buttonText} animated={true} />
                <Circle className="circle" />
                <Square className="square"/>
            </div>
        </div>
    )
}

export default GameTitle;