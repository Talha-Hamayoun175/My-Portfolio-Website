import React from "react";
import "../styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faGlobe,
    faBook,
    faBrush,
    faBullhorn,
    faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
        <div className="services">
            <h2>We do awesome services for our clients</h2>
            <div className="services-cards">
                <div className="services-card">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <h4>Web Design</h4>
                    <p>"Talha is a great developer! Highly recommended!"</p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faGlobe} />
                    <h4>Web Application</h4>
                    <p>"Talha is a great developer! Highly recommended!"</p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faBook} />
                    <h4>Web Development</h4>
                    <p>"Talha is a great developer! Highly recommended!"</p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faBrush} />
                    <h4>Banner Design</h4>
                    <p>"Talha is a great developer! Highly recommended!"</p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faBullhorn} />
                    <h4>Branding</h4>
                    <p>"Talha is a great developer! Highly recommended!"</p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faPaintBrush} />
                    <h4>Graphic Design</h4>
                    <p>"Talha is a great developer! Highly recommended!"</p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faGlobe} />
                    <h4>Web Application</h4>
                    <p>"Talha is a great developer! Highly recommended!"</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
