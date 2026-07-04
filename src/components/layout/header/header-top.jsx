import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "../../../assets/css/layout/top-bar.css";

const HeaderTop = () => {
  const [hideBar, setHideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideBar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-bar ${hideBar ? "hide-topbar" : ""}`}>
      <div className="top-left">
        <span className="top-item">
          <FaPhoneAlt className="icon" /> +91 98765 43210
        </span>

        <span className="top-item">
          <FaEnvelope className="icon" /> info@pigeonconstruction.com
        </span>
      </div>

      <div className="top-right">
        <span className="top-item">
          <FaClock className="icon" /> Mon - Sat : 9AM - 7PM
        </span>
      </div>
    </div>
  );
};

export default HeaderTop;
