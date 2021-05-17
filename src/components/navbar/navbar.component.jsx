import React from "react";

import "./navbar.styles.scss";
import "../../assets/common/common.scss";

import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">
                Aleksa Cekić
            </Link>
            <div className="options">
                <Link className="option" exact to="/">home</Link>
                <Link className="option" exact to="/projects">about</Link>
                <Link className="option" exact to="/contact">contact</Link>
            </div>
        </div>
    );
}

export default NavBar;
