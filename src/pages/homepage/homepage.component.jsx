import React from 'react';

import './hompage.styles.scss';
import Experience from "../experience/experience.component";
import Home from "../../components/home/home.component";
import ProjectsPage from "../projects/projects.component";
import About from "../../components/about/about.component";

const HomePage = () => {
    return (
        <div className='homepage'>
            <Home />
            <hr size='1'/>
            <About />
            <hr size='1'/>
            {/*<Experience />*/}
            {/*<ProjectsPage />*/}
        </div>
    );
}

export default HomePage;
