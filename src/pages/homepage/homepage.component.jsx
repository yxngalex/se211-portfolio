import React from 'react';

import './hompage.styles.scss';
import Home from "../../components/home/home.component";
import About from "../../components/about/about.component";

const HomePage = () => {
    return (
        <div className='homepage'>
            <Home />
            <About />
        </div>
    );
}

export default HomePage;
