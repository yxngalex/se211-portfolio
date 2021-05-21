import React, {useEffect} from "react";

import "./works.container.styles.scss";
import {Button} from "@material-ui/core";
import AOS from "aos";

const WorksContainer = ({imagePath, name}) => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <div data-aos="fade-up" className="works-container">
            <div className="pic-container">
                <div className="pic-img-container">
                    <img src={`${imagePath}`} alt="thumbnail"/>
                </div>
                <div className="pic-name">
                    <h3>{name}</h3>
                </div>
            </div>
            <div className="pt-name-box">
                <Button className="btnon">Show More!</Button>
            </div>
        </div>
    )
}

export default WorksContainer;
