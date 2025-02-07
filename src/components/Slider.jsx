import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";
import heroImage from "../assets/11.jpg";
import image1 from "../assets/22.jpg";
import image2 from "../assets/33.jpg";

const HeroSection = () => {
    const sliderContent = [
        {
            src: heroImage,
            alt: "Slide 1",
            heading: "Welcome to My Portfolio",
            description: "I'm a passionate developer. Explore my work and skills.",
        },
        {
            src: image1,
            alt: "Slide 2",
            heading: "Discover My Projects",
            description: "Check out my amazing work and creative ideas.",
        },
        {
            src: image2,
            alt: "Slide 3",
            heading: "Let's Collaborate!",
            description: "Feel free to reach out for exciting opportunities.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    return (
        <section className="hero-wrap">
            <Slider {...settings} className="hero-slider">
                {sliderContent.map((slide, index) => (
                    <div key={index} className="hero-slide">
                        <div className="hero-text">
                            <h1>{slide.heading}</h1>
                            <span>{slide.description}</span>
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
                        <img src={slide.src} alt={slide.alt} className="hero-image-slider" />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default HeroSection;
