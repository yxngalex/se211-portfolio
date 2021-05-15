import React from 'react';

import './contact.styles.scss';
import {Tooltip} from "@material-ui/core";

const Contact = () => {
    return (
        <div className='contact'>
            <h2>CONTACT INFO</h2>
            <div className="icons">
                <Tooltip title="Email" arrow>
                    <a rel="noreferrer" href="mailto://aleksa.cekic8@gmail.com" target="_blank">
                    <i className="fa fa-at fa-3x" aria-hidden="true"/>
                    </a>
                </Tooltip>
                <Tooltip title="Github" arrow>
                    <a rel="noreferrer" href="https://github.com/yxngalex" target="_blank">
                        <i className="fa fa-github fa-3x"/>
                    </a>
                </Tooltip>
                <Tooltip title="Facebook" arrow>
                    <a rel="noreferrer" href="https://www.facebook.com/aestheticsgodd/" target="_blank">
                        <i className="fa fa-facebook-square fa-3x" aria-hidden="true"/>
                    </a>
                </Tooltip>
                <Tooltip title="Instagram" arrow>
                    <a rel="noreferrer" href="https://www.instagram.com/yxngvlex/" target="_blank">
                        <i className="fa fa-instagram fa-3x" aria-hidden="true"/>
                    </a>
                </Tooltip>
            </div>
        </div>
    );
}

export default Contact;
