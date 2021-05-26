import React from "react";
// import Showcase from "../../components/showcase/showcase.component";
import img from "../../assets/images/thumbnail.jpg";

import "./workpage.styles.scss";

const WorkPage = () => {
    return (
        <div className="workpage">
            <div className="image">
                <img
                    src={img}
                    alt="thumbnail"
                />
            </div>
            <div className="works-header">
                <h2>Featured Work 1</h2>
                <h2>Featured Work 2</h2>
                <h2>Featured Work 3</h2>
                <h2>Featured Work 4</h2>
                <h2>Featured Work 5</h2>
                <h2>Featured Work 6</h2>
                <h2>Featured Work 7</h2>
            </div>
        </div>
    );
}

export default WorkPage;
