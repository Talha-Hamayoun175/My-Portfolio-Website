import React from "react";
import "../styles/Skills.css";

function Skills() {
    const skills = [
        { name: "HTML, CSS, JavaScript", progress: 90 },
        { name: "React, Node.js", progress: 85 },
        { name: "Responsive Design", progress: 80 },
        { name: "Git & GitHub", progress: 75 },
        { name: "REST APIs", progress: 70 },
    ];

    return (
        <div className="skills">
            <div className="skill-wrap">
                <h2>Skills</h2>
                <ul className="skills-list progress-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="progress-item">
                            <div className="circle-progress">
                                <svg>
                                    <circle cx="40" cy="40" r="35"></circle>
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        style={{
                                            strokeDashoffset: `calc(220 - (220 * ${skill.progress}) / 100)`,
                                        }}
                                    ></circle>
                                </svg>
                                <div className="progress-text">
                                    {skill.progress}%
                                </div>
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
