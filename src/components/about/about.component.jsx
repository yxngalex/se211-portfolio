import "./about.styles.scss";
import Accordion from "../accordion/accordion.component";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <section data-aos="fade-up" className="about">
            <h2>About</h2>
            <div>
                <div data-aos="fade-up" className="about-section">
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
                            content="Hi, my name is Aleksa born on 8th of August 1999. I am your standard garden variety
								software nerd. That means if something has computer code in it, I have already read
								about it or tried to
								implement it myself. Among the huge range of my interests I would emphasize the server
								programming,
								networking and scripting languages as my strong points. Regarding Web development I had
								written
								servers in 6 technologies so far but I tend to default to Express.js or Flask for my day
								to day needs. As for
								programming my go to languages are Go, C and Python. I have decent knowledge of Java and
								some others.
								Also I'm a Linux user and a big fan of Arch which I have installed on multiple machines.
								Aside from programming I do documentary photography and my photos are regularly uploaded
								to
								Instagram by my Python bot. Cycling is my go-to relaxation activity, helps me clear my
								head so I can solve
								problems better. I think I am honest, enthusiastic, easy to work with and more than
								willing to think outside
								of the box to solve any problem."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
