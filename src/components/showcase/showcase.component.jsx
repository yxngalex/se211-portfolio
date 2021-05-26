import React from "react";

import "./showcase.styles.scss";

const Showcase = ({imgPath, name, description}) => {
    return(
        <div className="showcase">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={imgPath}
                        alt="thumbnail"
                        />
                </div>
                <div className="col-md-4 work-content">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
}

export default Showcase;
