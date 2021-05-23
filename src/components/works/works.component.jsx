import React, {useEffect} from "react";

import "./works.styles.scss";
import img from "../../assets/images/gta-online.jpg";
import WorksContainer from "../works-container/works.container.component";
import AOS from "aos";

const Works = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <section data-aos="fade-up" className="works">
            <div className="works-heading-line">
                <h3>Featured Work</h3>
            </div>
            <div>
                <section className="works-showcase">
                        <WorksContainer
                            imagePath={img}
                            name="ROCKSTAR"
                        />
                </section>
            </div>
        </section>
    );
}

export default Works;
