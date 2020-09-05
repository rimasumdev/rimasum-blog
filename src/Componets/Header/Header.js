import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <h4>Rimasum Blog</h4>
            </div>

            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="service">Service</a></li>
                <li><a href="blog">Blog</a></li>
                <li><a href="about">About Us</a></li>
                <li><a href="contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Header;