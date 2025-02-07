import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import profileImage from "../assets/Talha.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <Link to="/">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </Link>
            </div>
            <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
}

export default Navbar;
