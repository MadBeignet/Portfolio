import React from 'react';
import './NewMainPage.css';
import Hamburger from '../MainPage/Hamburger';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <NavLink className="nav-link">
                <button className="name-box">Maddie Wisinski</button>
            </NavLink>
            
        </div>
    )
}

export default Header;