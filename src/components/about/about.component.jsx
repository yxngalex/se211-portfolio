import React from 'react';

import './about.styles.scss';

const About = () => {
    return (
        <section className="about">
            <h2>About</h2>
            <div>
                <div className="about-section">
                    <div class="about-header">
                        <i className="fa fa-arrow-down" aria-hidden="true"/>
                        <h3>Experience</h3>
                        <i className="fa fa-arrow-down" aria-hidden="true"/>
                    </div>
                    <div className="experience-description"/>
                </div>
                <div className="about-section">
                    <div className="about-header">
                        <i className="fa fa-arrow-down" aria-hidden="true"/>
                        <h3 className="knowledge-headline">Knowledge</h3>
                        <i className="fa fa-arrow-down" aria-hidden="true"/>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-header">
                        <i className="fa fa-arrow-down" aria-hidden="true"/>
                        <h3 className="knowledge-headline">Projects</h3>
                        <i className="fa fa-arrow-down" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
