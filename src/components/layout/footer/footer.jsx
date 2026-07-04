import React from "react";
import "../../../assets/css/layout/footer.css";

import logo from "../../../assets/images/logo/logo.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaBox,
  FaProjectDiagram,
  FaUsers,
  FaPhone,
  FaTools,
  FaWater,
  FaIndustry,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* COMPANY INFO */}
        <div className="footer-about">
          <img src={logo} alt="Pigeon Company" className="footer-logo" />

          <p>
            Mayura company provides professional pipeline construction,
            infrastructure development, and engineering solutions across India.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <button onClick={() => scrollToSection("home")}>
                <FaHome className="footer-link-icon" /> Home
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("products")}>
                <FaBox className="footer-link-icon" /> Products
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("projects")}>
                <FaProjectDiagram className="footer-link-icon" /> Projects
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("clients")}>
                <FaUsers className="footer-link-icon" /> Clients
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("contact")}>
                <FaPhone className="footer-link-icon" /> Contact
              </button>
            </li>
          </ul>
        </div>

        {/* SERVICES */}

        <div className="footer-services">
          <h3>Services</h3>

          <ul>
            <li>
              <FaTools className="footer-link-icon" /> Pipeline Installation
            </li>
            <li>
              <FaWater className="footer-link-icon" /> Water Supply Projects
            </li>
            <li>
              <FaIndustry className="footer-link-icon" /> Drainage Systems
            </li>
            <li>
              <FaIndustry className="footer-link-icon" /> Infrastructure
              Development
            </li>
            <li>
              <FaTools className="footer-link-icon" /> Engineering Consulting
            </li>
          </ul>
        </div>

        {/* CONTACT */}

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Bangalore, Karnataka, India
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 96005 44451
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@bangalorerccpipes.in
          </p>

          <p className="footer-hours">Mon - Sat : 9:00 AM - 7:00 PM</p>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">
        <p>
          Copyright {new Date().getFullYear()} Pigeon. Designed By{" "}
          <a
            href="https://frontlinetechnologies.org/"
            rel="noreferrer"
            target="_blank"
          >
            Frontline Technologies
          </a>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
