import "./about.styles.scss";
import Accordion from "../accordion/accordion.component";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <section data-aos="fade-up" className="about">
            <h2>About</h2>
            <div>
                <div data-aos="fade-up"  className="about-section">
                    <div className="about-info">
                        <Accordion
                            title="Experience"
                            headline="2 Years of experience"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat."
                        />
                    </div>
                    <div className="about-info">
                        <Accordion
                            title="Services"
                            headline="What I do?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat."
                        />
                    </div>
                    <div className="about-info">
                        <Accordion
                            title="About me"
                            headline="More about me"
                            content="Hi, my name is Aleksa born on 8th of August 1999. I'm really interested in
                                solving all kinds of different problems. You can say that I'm a nerd aspired to
                                be the best in everything that I do. I'm very interested in technology and the
                                whole concept of software engineering and computer science. I would emphesize the
                                scripting languages, networking and the server programming as my strong points."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
