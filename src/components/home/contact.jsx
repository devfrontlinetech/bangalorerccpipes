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
        {/* <iframe
          title="location"
          src="https://www.google.com/maps?q=Chennai&output=embed"
          loading="lazy"
        ></iframe> */}
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784590.9217407145!2d76.12152582400076!3d11.307327386312982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d1a06b2d8f7%3A0x395a5643676b4f41!2sBangalore%20Cement%20Pipes%20RCC%20Hume%20pipes!5e0!3m2!1sen!2sin!4v1783162841491!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
