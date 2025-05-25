import React from "react";
import productImage from "../assets/products.jpg";
// import "./Services.css";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Quality Management",
      desc: "Ensures consistent logistics reliability.",
    },
    {
      id: "02",
      title: "E-commerce Logistics",
      desc: "Integrated shipping for online sellers.",
    },
    {
      id: "03",
      title: "Aftermarket Logistics",
      desc: "Streamlined post-sale logistics.",
    },
    {
      id: "04",
      title: "Freight & Marine",
      desc: "Global port-to-port connectivity.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Core Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={productImage} alt={s.title} />
            <div className="service-info">
              <h3>
                {s.id}. {s.title}
              </h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
