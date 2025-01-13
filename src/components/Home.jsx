import React from "react";
import "../styles/Home.css";
import heroImage from "../assets/22.jpg";

function Home() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm a passionate developer. Explore my work and skills.</p>
            </div>
            <img src={heroImage} alt="Hero" className="hero-image" />
        </section>
    );
}

export default Home;
