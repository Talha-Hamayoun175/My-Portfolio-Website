import React from "react";
import "../styles/About.css";
import profileImage from "../assets/react.svg";

function About() {
    return (
        <section className="about">
            <div className="about-container">
                <img src={profileImage} alt="Profile" className="about-image" />
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I am a full-stack developer with a passion for building impactful applications.
                        With a strong foundation in JavaScript and React, I love bringing ideas to life.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
