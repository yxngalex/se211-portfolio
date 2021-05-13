import React from 'react';

import './navbar.styles.scss';
import '../../assets/common/common.scss';

import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo animate__animated animate__fadeInUp'>
                Aleksa Cekić
            </Link>
            <div className='options'>
                <Link className='option' exact to='/about'>ABOUT</Link>
                <Link className='option' exact to='/experience'>EXPERIENCE</Link>
                <Link className='option' exact to='/projects'>PROJECTS</Link>
                <Link className='option' exact to='/contact'>CONTACT</Link>
            </div>
        </div>
    );
}

export default NavBar;
