import React from 'react'
import './/Css/style.css'
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
                        <Link to='https://twitter.com/amanpatel96917' target='_blank'><FaTwitter/></Link>
                        <Link to='https://www.facebook.com/people/Aman-Patel/pfbid023q2j2478K76UyGKbnUhcYs5qBDd5mn92fjtbDgvVmAi3EnjceFYWzdd4fUBDNYQ1l/' target='_blank'><FaFacebookF/></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;