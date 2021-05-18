import React from "react";

import "./home.styles.scss";

const Home = () => {
    return (
        <div className="home">
            <h3 className="header-text">Hello, welcome to my page! <span className="wave-emoji emoji emoji-wave-animation">&#128075;</span></h3>
            <p className="about-text">
                Greetings, my name is Aleksa and I'm a student that loves to learn new stuff and explore new challenges.
                I'm currently studying Software Engineering and I'm working as a Software Developer. I'm very passionate
                about solving all kinds of different problems and I love breaking down complex problems into simple
                solutions.
            </p>
            <section className="myself">
                <div className="description">
                    <p className="me">This is me <span className="point-emoji emoji emoji-point-animation">&#128073;</span></p>
                </div>
                <div className="image">
                    <img src="https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.6435-9/118378826_3535231199841035_2511745486699800012_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHLAH3NUDd3IgcIYpjgdN7ngOqVgsXWDuWA6pWCxdYO5T-GbISC9e9xLjF1yeP4INBsFgyuhwDbdozC9Obr1KHf&_nc_ohc=NIx7L_31ongAX-wx4w7&_nc_ht=scontent.fbeg5-1.fna&oh=944ec05d243a1667beedbb35e95e9f37&oe=60C44123"
                         width="447" height="447" alt="me" />
                </div>
            </section>
            <section>
                <div className="more-info">
                    <div className="touch">
                        <p>So let's get in touch! <span className="peace-emoji emoji">&#9996;</span></p>
                    </div>
                    <div className="booking">
                        <div className="circle">
                            <p>Book Now!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
