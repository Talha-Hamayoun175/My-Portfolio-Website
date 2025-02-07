import React from "react";
import "../styles/About.css";
import profileImage from "../assets/Talha.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCamera, faBook, faMusic, faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";


function About() {
    return (
        <div className="about">
            <div className="about-container">
                <img src={profileImage} alt="Profile" className="about-image" />
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <ul className="about-info">
                        <li className="about-flex"><span>Name:</span> <span>Talha Hamayoun</span></li>
                        <li className="about-flex"><span>Date of birth:</span> <span>June 18, 1998</span></li>
                        <li className="about-flex"><span>Address:</span> <span>Johar Town Lahore Block J 3 Phase 2 </span></li>
                        <li className="about-flex"><span>Zip code:</span> <span>54000</span></li>
                        <li className="about-flex"><span>Email:</span> <span>talhakatal175@gmail.com</span></li>
                        <li className="about-flex"><span>Phone: </span> <span>+923109022510</span></li>
                    </ul>
                    <div className="interests">
                        <ul className="interests-list">
                            <li><FontAwesomeIcon icon={faPlane} /> <span>Traveling</span></li>
                            <li><FontAwesomeIcon icon={faCamera} /> <span>Photography</span></li>
                            <li><FontAwesomeIcon icon={faBook} /> <span>Reading</span></li>
                            <li><FontAwesomeIcon icon={faMusic} /> <span>Music</span></li>
                            <li><FontAwesomeIcon icon={faCode} /> <span>Programming</span></li>
                            <li><FontAwesomeIcon icon={faPaintBrush} /> <span>Art</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
