import "./timeline.styles.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Timeline = ({date, text}) => {
    useEffect(() => {
        gsap.fromTo(".timeline_container", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2
        })
    })

    return (
        <div className="grid_timeline">
            <div className="timeline_container">
                <div className="heading_container">
                    <h2>{date}</h2>
                </div>
                <div className="content_container">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline;