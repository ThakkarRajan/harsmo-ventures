import React from "react";
import heroImg from "../assets/hero.jpeg";
import "../styles/Home.css"; // we'll use this for small tweaks

export default function Home() {
  const features = [
    {
      title: "Supply Chain Solutions",
      desc: "Top-tier pricing from leading institutions",
    },
    {
      title: "End to End Transportation",
      desc: "No delays, fair pricing, and global reach",
    },
    {
      title: "Contract Logistics",
      desc: "Digital-first logistics planning tools",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="hero d-flex align-items-end text-white text-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="container mb-5 p-4 bg-dark bg-opacity-75 rounded">
          <h1 className="display-5 fw-bold">
            Connect Your Business to a World of Possibilities
          </h1>
          <p className="lead mb-4">
            We streamline global logistics to help you scale seamlessly and
            securely.
          </p>
          <a href="#services" className="btn btn-warning btn-lg fw-bold">
            View Services
          </a>
        </div>
      </section>
      <section className="py-5 bg-dark text-white" id="why-traders">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold text-gradient-orange">
            Why Traders Choose Us
          </h2>
          <div className="row g-4">
            {features.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card why-card h-100 border-0 shadow-lg text-center p-4">
                  <div className="icon-circle mx-auto mb-3 bg-warning text-dark">
                    ✓
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted mb-3">{item.desc}</p>
                  <a
                    href="#contact"
                    className="fw-semibold text-decoration-none text-primary"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
