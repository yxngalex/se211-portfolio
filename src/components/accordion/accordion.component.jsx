import React, {useRef, useState} from "react";

import "./accordion.styles.scss";


const Accordion = ({title, content}) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("fa fa-arrow-down");
    const cntn = useRef(null);

    const toggleAccordion = () => {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${cntn.current}px`);
        setRotate(
            setActive === "active" ? "fa fa-arrow-down" : "fa fa-arrow-down rotate"
        );
        console.log(active)
    }

    return (
        <div className="accordion__section">
            <div className="accordion-header" onClick={toggleAccordion}>
                <i className={`${rotate}`} aria-hidden="true"/>
                <h3>{title}</h3>
                <i className={`${rotate}`} aria-hidden="true"/>
            </div>
            <div ref={cntn} style={{maxHeight: `${height}`}} className={`accordion-description ${active}`}>
                <h4>{title}</h4>
                <p dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </div>
    );
}

export default Accordion;
