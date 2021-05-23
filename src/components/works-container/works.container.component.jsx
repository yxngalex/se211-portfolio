import React, {useEffect} from "react";

import "./works.container.styles.scss";
import {Button} from "@material-ui/core";
import AOS from "aos";
import {Link} from "react-router-dom";

const WorksContainer = ({imagePath, name}) => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <div data-aos="fade-up" className="works-container">
            <Link to="/works">
                <div className="pic-container">
                    <div className="pic-img-container">
                        <img src={`${imagePath}`} alt="thumbnail"/>
                    </div>
                    <div className="pic-name">
                        <h3>{name}</h3>
                    </div>
                </div>
            </Link>
            <div className="pt-name-box">
                <Link to="/works">
                    <Button
                        className="btnon"
                    >
                        Show More!
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default WorksContainer;
