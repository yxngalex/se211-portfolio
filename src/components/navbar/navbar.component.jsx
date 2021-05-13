import React from 'react';

import './navbar.styles.scss';
import '../../assets/common/common.scss';

import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo scale-in-center'>
                Aleksa Cekić
            </Link>
            <div className='options'>
                <Link className='option scale-in-center' to='/experience'>EXPERIENCE</Link>
                <Link className='option scale-in-center' to='/projects'>PROJECTS</Link>
                <Link className='option scale-in-center' to='/contact'>CONTACT</Link>
            </div>
        </div>
    );
}

export default NavBar;
