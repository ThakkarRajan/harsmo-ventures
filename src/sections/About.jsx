import React from "react";
import aboutImage from "../assets/about.jpg";
// import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <img src={aboutImage} alt="Shipping Containers" className="about-image" />
      <div className="about-text">
        <h2>About us</h2>
        <p>
          We believe real change is possible. With over 5 years of experience,
          Harsmo Ventures empowers businesses to scale across borders with
          logistics that work.
        </p>
        <a href="#contact" className="btn-primary">
          Read more
        </a>
      </div>
    </section>
  );
}
