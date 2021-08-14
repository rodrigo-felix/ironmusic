import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbarcustom justify-content-center">
            <NavLink className="navbar-brand" to="/" exact>
                IronMusic
            </NavLink>
        </nav>
    )
}

export default Navbar;