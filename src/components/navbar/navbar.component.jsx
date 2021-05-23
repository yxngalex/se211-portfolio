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
                <Link className="option" to="/">Home</Link>
                <Link className="option" to="/works">Work</Link>
            </div>
        </div>
    );
}

export default NavBar;
