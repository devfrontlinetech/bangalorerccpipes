import React from "react";

import Header from "./components/layout/header/header.jsx";
import Hero from "./components/home/hero.jsx";
import Products from "./components/home/products.jsx";
import Projects from "./components/home/projects.jsx";
import Clients from "./components/home/clients.jsx";
import Contact from "./components/home/contact.jsx";
import Footer from "./components/layout/footer/footer.jsx";

import Bottomnav from "./components/layout/bottom-nav.jsx";
import Float from "./components/common/float.jsx";

const App = () => {
  // Scroll to section handler
  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="clients">
        <Clients />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />

      <Bottomnav onMenuClick={handleMenuClick} />
      <Float />
    </div>
  );
};

export default App;
