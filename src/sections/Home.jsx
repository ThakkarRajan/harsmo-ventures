import React from "react";
import heroImg from "../assets/hero.jpeg";

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">
            Connect Your Business to a World of Possibilities
          </h1>
          <p className="hero-subtitle">
            We streamline global logistics to help you scale seamlessly and
            securely.
          </p>
          <a href="#services" className="btn btn-primary">
            View Services
          </a>
        </div>
      </section>
      <section className="section why-traders">
        <h2 className="section-title">Why Traders Choose Us</h2>
        <div className="features-grid">
          {[
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
          ].map((item, i) => (
            <div
              className="feature-card fade-in-up"
              key={i}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="icon-circle">✓</div> {/* Optional icon */}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#contact" className="read-more">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
