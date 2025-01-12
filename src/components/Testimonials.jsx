import React from "react";
import "../styles/Testimonials.css";
import testimonial1 from "../assets/react.svg";
import testimonial2 from "../assets/react.svg";

function Testimonials() {
    return (
        <section className="testimonials">
            <h2>What People Say</h2>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <img src={testimonial1} alt="Testimonial 1" />
                    <p>"Talha is a great developer! Highly recommended!"</p>
                    <h4>- Client 1</h4>
                </div>
                <div className="testimonial-card">
                    <img src={testimonial2} alt="Testimonial 2" />
                    <p>"Excellent work! Will definitely work with Talha again."</p>
                    <h4>- Client 2</h4>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
