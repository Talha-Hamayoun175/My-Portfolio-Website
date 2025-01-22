import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import profileImage from "../assets/Talha.jpg";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li className="Contact-Us"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
