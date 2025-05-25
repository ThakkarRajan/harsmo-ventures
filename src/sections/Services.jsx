import React, { useState } from "react";
import productImage from "../assets/products.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Quality Management",
      desc: "We provide robust quality control mechanisms to ensure that goods maintain consistent standards, minimizing delays and compliance risks.",
    },
    {
      id: "02",
      title: "E-commerce Logistics",
      desc: "Our integrated e-commerce logistics solutions streamline packaging, shipping, and delivery, allowing businesses to scale rapidly.",
    },
    {
      id: "03",
      title: "Aftermarket Logistics",
      desc: "We handle complex reverse logistics, spare parts, and customer service support for smooth post-sale operations.",
    },
    {
      id: "04",
      title: "Freight & Marine",
      desc: "We offer efficient port-to-port transportation through our global freight network, including customs clearance and real-time tracking.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="services-inner"
      className="services-section bg-dark text-light py-5"
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5 text-gradient-orange">
          Our Core Services
        </h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="card h-100 service-card shadow-sm"
                onClick={() => toggleDescription(i)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={productImage}
                  alt={s.title}
                  className="service-img-top"
                />
                <div className="card-body text-dark p-4">
                  <h5 className="card-title fw-bold mb-2">
                    {s.id}. {s.title}
                  </h5>
                  {expandedIndex === i && <p className="card-text">{s.desc}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
