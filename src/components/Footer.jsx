import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-section">
                    <h4>About Me</h4>
                    <p>
                        I am a passionate developer with expertise in creating professional, modern, and scalable web applications. 
                        Let's build something amazing together!
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section social">
                    <h4>Follow Me</h4>
                    <ul className="social-links">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h4>Contact Me</h4>
                    <p>Email: <a href="mailto:example@email.com">talhakatal175@email.com</a></p>
                    <p>Phone: +92 3109022510</p>
                    <div className="cv-holder">
                        <a
                            href="/TalhaHamayounCV.pdf"
                            download="TalhaHamayounCV.pdf"
                            className="download-btn"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>&copy; 2025 My Portfolio. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
