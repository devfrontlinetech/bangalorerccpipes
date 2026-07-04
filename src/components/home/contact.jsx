import React from "react";
import "../../assets/css/home/contact.css";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Get in touch with us for pipeline construction, infrastructure
          projects, and engineering services.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon-box">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-text">
              <h4>Address</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-box">
              <FaPhoneAlt />
            </div>

            <div className="contact-text">
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-box">
              <FaEnvelope />
            </div>

            <div className="contact-text">
              <h4>Email</h4>
              <p>info@pigeonconstruction.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Subject" />

            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="location"
          src="https://www.google.com/maps?q=Chennai&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
