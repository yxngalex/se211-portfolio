import React from 'react';

import './about.styles.scss';

const About = () => {
    return (
        <div className='about'>
            <h2>ABOUT</h2>
            <div className="about-text">
                <h3>Info</h3>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className="education">
                <h3>Education</h3>
                <ul>
                    <li>
                        High School - "Elektrotehnička Škola Nikola Tesla" - computer electrotechnician (2014 - 2018)
                    </li>
                    <li>
                        University - "Univerzitet Metropolitan Beograd" - software engineering (2019 - present)
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
