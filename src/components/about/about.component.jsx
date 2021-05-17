import "./about.styles.scss";
import Accordion from "../accordion/accordion.component";

const About = () => {
    return (
        <section className="about">
            <h2>About</h2>
            <div>
                <div className="about-section">
                    <div className="about-info">
                        <Accordion title="Experience" content="Content"/>
                    </div>
                    <div className="about-info">
                        <Accordion title="Test" content="Content1"/>
                    </div>
                    <div className="about-info">
                        <Accordion title="Projects" content="Content2"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
