import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Testimonials.css";
import testimonial1 from "../assets/1.jpg";
import testimonial2 from "../assets/2.jpg";
import testimonial3 from "../assets/3.jpg";
import testimonial4 from "../assets/4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
    return (
        <div className="testimonials">
            <h2>What People Say</h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className="card-body">
                            <img src={testimonial1} alt="Testimonial 2" />
                            <div className="card-holder text-start">
                                <h4>Umer</h4>
                                <p className="testimonial-role p-0">Software Engineer</p>
                            </div>
                        </div>
                        <li>
                            <FontAwesomeIcon icon={faQuoteLeft} />{" "}
                            <span>
                                Excellent work! Will definitely work with Talha again.
                            </span>
                        </li>
                        <p className="testimonial-date">April 15, 2023</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className="card-body">
                            <img src={testimonial2} alt="Testimonial 2" />
                            <div className="card-holder text-start">
                                <h4>Ali</h4>
                                <p className="testimonial-role p-0">Software Engineer</p>
                            </div>
                        </div>
                        <li>
                            <FontAwesomeIcon icon={faQuoteLeft} />{" "}
                            <span>
                                Excellent work! Will definitely work with Talha again.
                            </span>
                        </li>
                        <p className="testimonial-date">April 15, 2023</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className="card-body">
                            <img src={testimonial3} alt="Testimonial 2" />
                            <div className="card-holder text-start">
                                <h4>Ahmed</h4>
                                <p className="testimonial-role p-0">Software Engineer</p>
                            </div>
                        </div>
                        <li>
                            <FontAwesomeIcon icon={faQuoteLeft} />{" "}
                            <span>
                                Excellent work! Will definitely work with Talha again.
                            </span>
                        </li>
                        <p className="testimonial-date">April 15, 2023</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-card">
                        <div className="card-body">
                            <img src={testimonial4} alt="Testimonial 2" />
                            <div className="card-holder text-start">
                                <h4>Zain</h4>
                                <p className="testimonial-role p-0">Software Engineer</p>
                            </div>
                        </div>
                        <li>
                            <FontAwesomeIcon icon={faQuoteLeft} />{" "}
                            <span>
                                Excellent work! Will definitely work with Talha again.
                            </span>
                        </li>
                        <p className="testimonial-date">April 15, 2023</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonials;
