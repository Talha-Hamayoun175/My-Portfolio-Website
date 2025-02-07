import React, { useEffect } from "react";
import "../styles/Home.css";
import { animateOnScroll } from "../Js/products.js";
import heroImage from "../assets/222.jpg";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import HeroSection from "./Slider.jsx";
import Animation from "./Amimation.jsx";
import Services from "./Services.jsx";

function Home() {
    useEffect(() => {
        animateOnScroll();
    }, []);
    return (
        <>
            {/* <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to My Portfolio</h1>
                    <p>I'm a passionate developer. Explore my work and skills.</p>
                </div>
                <img src={heroImage} alt="Hero" className="hero-image" />
            </section> */}

            <section>
                < HeroSection />
            </section>
            <section>
                < Animation />
            </section>
            <section className="animate-section about-wrap">
                <About />
            </section>
            <section className="animate-section skills-wrap">
                <Skills />
            </section>
            <section className="animate-section projects-wrap">
                <Projects />
            </section>
            <section className="animate-section textimonials-wrap">
                < Testimonials />
            </section>
            <section className="animate-section services-wrap">
                < Services />
            </section>
            <section className="animate-section contact-wrap">
                <Contact />
            </section>
        </>
    );
}

export default Home;
