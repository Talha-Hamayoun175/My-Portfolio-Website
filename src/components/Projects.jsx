import React from "react";
import "../styles/Projects.css";
import project1 from "../assets/react.svg";
import project2 from "../assets/react.svg";
import project3 from "../assets/react.svg";

function Projects() {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-cards">
                <div className="project-card">
                    <img src={project1} alt="Project 1" />
                    <h3>Project 1</h3>
                    <p>Description of project 1...</p>
                </div>
                <div className="project-card">
                    <img src={project2} alt="Project 2" />
                    <h3>Project 2</h3>
                    <p>Description of project 2...</p>
                </div>
                <div className="project-card">
                    <img src={project3} alt="Project 3" />
                    <h3>Project 3</h3>
                    <p>Description of project 3...</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
