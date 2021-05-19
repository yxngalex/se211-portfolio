import React, {useState} from "react";

import "./accordion.styles.scss";


const Accordion = ({title, content, headline}) => {
    const [active, setActive] = useState("");
    const [rotate, setRotate] = useState("");

    const toggleAccordion = () => {
        setActive(active === "" ? "active" : "");
        setRotate(active === "active" ? "reverse-rotate" : "rotate");
    }

    return (
        <div className="accordion__section">
            <div className="accordion-header" onClick={toggleAccordion}>
                <i className={`fa fa-chevron-down ${rotate}`} aria-hidden="true"/>
                <h3 className={`${active}`}>{title}</h3>
                <i className={`fa fa-chevron-down ${rotate}`} aria-hidden="true"/>
            </div>
            <div className={`accordion-description ${active}`}>
                <div>
                    <h4 className="accordion-headline">{headline}</h4>
                    <div className="accordion-text">
                        <p dangerouslySetInnerHTML={{__html: content}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
