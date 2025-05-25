import React from "react";
import productImage from "../assets/products.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Services.css"; // for custom styles like colors, hover, etc.

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
    <section id="services" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-5 display-6">
          Our Core Services
        </h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm service-card">
                <img
                  src={productImage}
                  alt={s.title}
                  className="card-img-top service-img"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-dark fw-semibold">
                    {s.id}. {s.title}
                  </h5>
                  <p className="card-text text-secondary">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
