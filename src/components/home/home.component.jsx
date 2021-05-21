import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./home.styles.scss";
import "../../assets/common/common.scss";

const Home = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <div data-aos="fade-up" className="home">
            <h2 className="header-text">
                Hello, <br/>
                welcome <br/>
                to my website!
                <span className="wave-emoji emoji">
                    &#128075;
                </span>
            </h2>
            <p className="about-text">
                I PRESENT TO YOU WEB DEVELOPMENT LIKE NO OTHER, <br/>
                UNIQUE & AWARD-WINNING DIGITAL PRODUCTS <br/>
                IN THE MOST UNCOMPLICATED WAY POSSIBLE.
            </p>
            <section data-aos="fade-up" className="myself">
                <div data-aos="fade-up"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                     className="description"
                >
                    <p className="me">
                        Greetings, my name is Aleksa and I'm a student that loves to learn new stuff and explore new
                        challenges.
                        I'm currently studying Software Engineering and I'm working as a Software Developer. I'm very
                        passionate
                        about solving all kinds of different problems and I love breaking down complex problems into
                        simple
                        solutions.
                    </p>
                </div>
                <div data-aos="fade-up" className="image">
                    <img
                        src="https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.6435-9/118378826_3535231199841035_2511745486699800012_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHLAH3NUDd3IgcIYpjgdN7ngOqVgsXWDuWA6pWCxdYO5T-GbISC9e9xLjF1yeP4INBsFgyuhwDbdozC9Obr1KHf&_nc_ohc=NIx7L_31ongAX-wx4w7&_nc_ht=scontent.fbeg5-1.fna&oh=944ec05d243a1667beedbb35e95e9f37&oe=60C44123"
                        width="447" height="447" alt="me"/>
                </div>
            </section>
            <section data-aos="flip-down">
                <div className="more-info">
                    <div className="touch">
                        <h2>No over-strategizing <br/>
                            No bloating <br/>
                            <span className="secondary-color">No fuss!</span>
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
