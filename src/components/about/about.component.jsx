import React from 'react';

import './about.styles.scss';
import {Tooltip} from "@material-ui/core";

const About = () => {
    return (
        <div className='about'>
            <h2>ABOUT</h2>
            <div className="icons">
                <Tooltip title="Email" arrow>
                    <i className="fa fa-at fa-3x" aria-hidden="true"/>
                </Tooltip>
                <Tooltip title="Github" arrow>
                    <i className="fa fa-github fa-3x"/>
                </Tooltip>
                <Tooltip title="Facebook" arrow>
                    <i className="fa fa-facebook-square fa-3x" aria-hidden="true"/>
                </Tooltip>
                <Tooltip title="Instagram" arrow>
                    <i className="fa fa-instagram fa-3x" aria-hidden="true"/>
                </Tooltip>
            </div>
        </div>
    );
}

export default About;
