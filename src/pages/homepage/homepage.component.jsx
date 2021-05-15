import React from 'react';

import './hompage.styles.scss';
import Home from "../../components/home/home.component";
import Contact from "../../components/contact/contact.component";
import About from "../../components/about/about.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <Home />
            <About />
            <Contact />
        </div>
    );
}

export default HomePage;
