import React from "react";
import aboutImage from "../assets/about.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <section
      id="about"
      className="min-vh-100 d-flex align-items-center bg-light text-dark"
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src={aboutImage}
              alt="About us"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="display-6 fw-bold mb-4 text-gradient-orange">
              About Us
            </h2>
            <p className="lead text-secondary mb-4">
              With over 5 years of experience, Harsmo Ventures empowers
              businesses to scale across borders with smart, reliable logistics.
            </p>
            <a href="#contact" className="btn btn-warning btn-lg fw-semibold">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
