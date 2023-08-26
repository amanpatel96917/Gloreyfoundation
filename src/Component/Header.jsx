import React from 'react'
import './style.css'
import {  FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="container">
                    <div className="linkes">
                        <Link to='/' >Home</Link>
                        <Link to='/' >Events</Link>
                        <Link to='/' >Become A Volunteer</Link>
                    </div>
                    <div className="icons">
                        <Link to='/'><FaTwitter/></Link>
                        <Link to='/'><FaFacebookF/></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;