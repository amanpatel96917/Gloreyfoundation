import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to='/'><img src="./images/Logo_glorey.png" alt="Logo" style={{maxWidth:"18%"}} /></Link>
                </div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li className="services">
                            <Link to="/">Services</Link>
                        </li>
                        <li><Link to="/">Pricing</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
