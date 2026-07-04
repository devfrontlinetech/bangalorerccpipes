import React, { useState, useEffect, useCallback } from "react";
import "../../assets/css/home/hero.css";
// import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import video1 from "../../assets/videos/hero-01.mp4";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const Hero = () => {
  const texts = [
    {
      title: "Mayura Concrete Products",
      subtitle: "Building Reliable Infrastructure",
    },
    {
      title: "Industrial Pipe Solutions",
      subtitle: "Quality Materials For Every Project",
    },
    {
      title: "Trusted Construction Partner",
      subtitle: "Delivering Excellence Since 2005",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % texts.length);
  }, [texts.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + texts.length) % texts.length);
  };

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(auto);
  }, [nextSlide]);

  const scrollToProducts = () => {
    const section = document.getElementById("products");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero">
      <video
        className="hero-video"
        src={video1}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{texts[current].title}</h1>

        <p className="hero-subtitle">{texts[current].subtitle}</p>

        <button className="hero-btn" onClick={scrollToProducts}>
          <MdConstruction className="hero-icon" />
          Get Products
        </button>

        <div className="top-bar">
          <div className="top-left">
            <span className="top-item">
              <FaMapMarkerAlt />
              Kochi, Kerala
            </span>

            <span className="top-item">
              <FaEnvelope />
              info@kochirccpipes.in
            </span>
          </div>

          <div className="top-right">
            <span className="top-item">
              <FaPhoneAlt />
              +91 96005 44451
            </span>
            <span className="top-item">
              <FaClock />
              Mon - Sat : 9AM - 7PM
            </span>
          </div>
        </div>
      </div>

      <div className="hero-buttons">
        <button onClick={prevSlide} className="nav-btn">
          <FaArrowLeft />
        </button>

        <button onClick={nextSlide} className="nav-btn">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
