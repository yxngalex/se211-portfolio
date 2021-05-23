import React from "react";

import "./showcase.styles.scss";

const Showcase = ({imagePath, name, isNew}) => {
    return (
        <div className="showcase-container">
            <div className="image-box">
                <img src={imagePath} alt="showcase"/>
            </div>
            <div className="work-name-box">
                <span>{isNew ? "NEW" : ""}</span>
                <span>{name}</span>
            </div>
        </div>
    )
}

export default Showcase;
