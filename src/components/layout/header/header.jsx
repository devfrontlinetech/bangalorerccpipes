import React, { useState, useEffect } from "react";
import "../../../assets/css/layout/header.css";
import logo from "../../../assets/images/logo/logo.png";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FiPhoneCall } from "react-icons/fi";

// import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      {/* MAIN */}

      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>

          <button onClick={() => scrollToSection("products")}>Products</button>

          <button onClick={() => scrollToSection("projects")}>Projects</button>

          <button onClick={() => scrollToSection("clients")}>Clients</button>

          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        <div className="header-btn">
          <button onClick={() => scrollToSection("contact")}>Get Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
