import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbarcustom justify-content-center">
            <NavLink className="navbar-brand" to="/" exact>
                <h1>IronMusic</h1>
            </NavLink>
        </nav>
    )
}

export default Navbar;