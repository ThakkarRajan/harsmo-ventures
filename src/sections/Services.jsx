import React from "react";
import hardwareImage from "../assets/hardware.png";
import metalImage from "../assets/metal.png";
import fastenersImage from "../assets/Fasteners.png";
import educationtoysImage from "../assets/Educational Toys.png";
import foodImage from "../assets/Packaged Food.png";
import textileImage from "../assets/Textile Raw Materials.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Hardware Accessories",
      desc: "Hooks, knobs, locks, scales, and bathroom accessories crafted for durability and modern appeal—ideal for both residential and commercial markets.",
      image: hardwareImage,
    },
    {
      id: "02",
      title: "Metal Scrap",
      desc: "We source and supply recyclable metal scrap like aluminum UBC, alloy wheels, stainless steel 304, and cast iron—contributing to a more sustainable world.",
      image: metalImage,
    },
    {
      id: "03",
      title: "Fasteners & Fittings",
      desc: "A wide range of bolts, nuts, washers, and precision fasteners designed for strength and reliability across industries.",
      image: fastenersImage,
    },
    {
      id: "04",
      title: "Educational Toys",
      desc: "Innovative early-learning products including baby cushions, flashcards, puzzles, and spelling games—designed to enrich childhood development.",
      image: educationtoysImage,
    },
    {
      id: "05",
      title: "Packaged Food & Whole Grains",
      desc: "A curated line of traditional dairy items and Indian mouth fresheners (mukhvas), offering authentic taste with premium quality standards.",
      image: foodImage,
    },
    {
      id: "06",
      title: "Textile Raw Materials",
      desc: "We supply plain sarees, cotton T-shirts, shirt fabrics, and other raw materials for garment manufacturing and distribution.",
      image: textileImage,
    },
  ];

  return (
    <section
      id="services-inner"
      className="services-section bg-dark text-light py-5"
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5 text-gradient-orange">
          Our Core Products
        </h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card service-card h-100 shadow-sm">
                <div className="service-img-wrapper">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="card-img-top service-img-top"
                  />
                  <div className="overlay-blur">
                    <div className="overlay-text">
                      <h5>{s.title}</h5>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body text-dark p-4">
                  <h5 className="card-title fw-bold mb-2 text-center">
                    {s.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
