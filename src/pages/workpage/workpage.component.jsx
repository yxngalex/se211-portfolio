import React from "react";
import Showcase from "../../components/showcase/showcase.component";
import img from "../../assets/images/gta-online.jpg";

import "./workpage.styles.scss";

const WorkPage = () => {
    return (
        <div>
            <Showcase imagePath={img} name="ROCKSTAR" />
        </div>
    );
}

export default WorkPage;
