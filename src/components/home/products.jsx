import React from "react";
import "../../assets/css/home/products.css";

import pipe1 from "../../assets/images/products/pipe-01.jpg";
import pipe2 from "../../assets/images/products/pro-01.jpg";
import pipe3 from "../../assets/images/products/pipe-03.jpg";
import pipe4 from "../../assets/images/products/pro-02.jpg";
import pipe5 from "../../assets/images/products/pipe-05.jpg";
import pipe6 from "../../assets/images/products/pipe-06.jpg";
import pipe7 from "../../assets/images/products/pro-03.jpg";
import pipe8 from "../../assets/images/products/pro-04.jpg";
import pipe9 from "../../assets/images/products/pro-05.jpg";
import pipe10 from "../../assets/images/products/pro-06.jpg";
import pipe11 from "../../assets/images/products/pipe-11.jpg";
import pipe12 from "../../assets/images/products/pro-07.jpg";
import pipe13 from "../../assets/images/products/pro-08.jpg";
import pipe14 from "../../assets/images/products/pro-09.jpg";
import pipe15 from "../../assets/images/products/pro-10.jpg";
import pipe16 from "../../assets/images/products/pro-12.jpg";

import { FaStar } from "react-icons/fa";

const Products = () => {
  const whatsappNumber = "919876543210";

  const sendWhatsapp = (product) => {
    const message = `Hello, I'm interested in ${product.name}. Please share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const products = [
    {
      id: 1,
      name: "NP2 RCC Pipe",
      material: "Reinforced Cement Concrete",
      size: "300mm - 600mm",
      price: "₹1,000 / meter",
      rating: 4,
      image: pipe1,
    },
    {
      id: 2,
      name: "NP3 RCC Pipe",
      material: "Reinforced Cement Concrete",
      size: "300mm - 900mm",
      price: "₹1,500 / meter",
      rating: 5,
      image: pipe2,
    },
    {
      id: 3,
      name: "NP4 RCC Pipe",
      material: "Heavy Duty RCC",
      size: "600mm - 1200mm",
      price: "₹2,000 / meter",
      rating: 4,
      image: pipe3,
    },
    {
      id: 4,
      name: "Jack Pipe",
      material: "High Strength Concrete",
      size: "900mm - 1800mm",
      price: "₹3,500 / meter",
      rating: 5,
      image: pipe4,
    },
    {
      id: 5,
      name: "Hume Pipe",
      material: "Reinforced Concrete",
      size: "300mm - 1500mm",
      price: "₹2,800 / meter",
      rating: 4,
      image: pipe5,
    },
    {
      id: 6,
      name: "Spun Concrete Pipe",
      material: "Precast Concrete",
      size: "300mm - 1200mm",
      price: "₹1,900 / meter",
      rating: 4,
      image: pipe6,
    },
    {
      id: 7,
      name: "Socket & Spigot Pipe",
      material: "RCC",
      size: "300mm - 1000mm",
      price: "₹3,000 / meter",
      rating: 4,
      image: pipe7,
    },
    {
      id: 8,
      name: "Collar Joint Pipe",
      material: "Concrete",
      size: "300mm - 900mm",
      price: "₹1,200 / meter",
      rating: 4,
      image: pipe8,
    },
    {
      id: 9,
      name: "Storm Water Pipe",
      material: "RCC",
      size: "450mm - 1500mm",
      price: "₹2,400 / meter",
      rating: 4,
      image: pipe9,
    },
    {
      id: 10,
      name: "Drainage Pipe",
      material: "Concrete",
      size: "300mm - 1000mm",
      price: "₹1,600 / meter",
      rating: 4,
      image: pipe10,
    },
    {
      id: 11,
      name: "Sewerage Pipe",
      material: "RCC",
      size: "450mm - 1500mm",
      price: "₹1,800 / meter",
      rating: 5,
      image: pipe11,
    },
    {
      id: 12,
      name: "Culvert Pipe",
      material: "Concrete",
      size: "600mm - 1800mm",
      price: "₹2,900 / meter",
      rating: 4,
      image: pipe12,
    },
    {
      id: 13,
      name: "Precast Pipe",
      material: "Concrete Composite",
      size: "300mm - 900mm",
      price: "₹1,100 / meter",
      rating: 4,
      image: pipe13,
    },
    {
      id: 14,
      name: "Concrete Drain Pipe",
      material: "RCC",
      size: "300mm - 1200mm",
      price: "₹1,400 / meter",
      rating: 4,
      image: pipe14,
    },
    {
      id: 15,
      name: "Industrial RCC Pipe",
      material: "Heavy Duty Concrete",
      size: "900mm - 2000mm",
      price: "₹4,000 / meter",
      rating: 5,
      image: pipe15,
    },
    {
      id: 16,
      name: "Irrigation RCC Pipe",
      material: "Concrete",
      size: "300mm - 1000mm",
      price: "₹1,700 / meter",
      rating: 4,
      image: pipe16,
    },
  ];

  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <h2>Our Pipe Products</h2>
        <p>High quality pipes for construction and infrastructure projects</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <div className="product-top">
                <h3>{product.name}</h3>

                <div className="rating">
                  {[...Array(5)].map((star, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < product.rating ? "star active" : "star"
                      }
                    />
                  ))}

                  <span className="rating-number">({product.rating}.0)</span>
                </div>
              </div>

              <p>
                <strong>Material:</strong> {product.material}
              </p>

              <p>
                <strong>Sizes:</strong> {product.size}
              </p>

              <p className="price">
                <span style={{ color: "#f10f31" }}>{product.price}</span>
              </p>

              <button
                className="details-btn"
                onClick={() => sendWhatsapp(product)}
              >
                Get Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
