import React from "react";
import "../styles/Testimonials.css";
import testimonial1 from "../assets/1.jpg";
import testimonial2 from "../assets/2.jpg";

function Testimonials() {
    return (
        <div className="testimonials">
            <h2>What People Say</h2>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <img src={testimonial1} alt="Testimonial 1" />
                    <p>"Talha is a great developer! Highly recommended!"</p>
                    <h4>Ali</h4>
                </div>
                <div className="testimonial-card">
                    <img src={testimonial2} alt="Testimonial 2" />
                    <p>"Excellent work! Will definitely work with Talha again."</p>
                    <h4>Umer</h4>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
