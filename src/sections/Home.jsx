import React from "react";
import heroImg from "../assets/hero.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-end justify-content-center text-white text-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mb-5 bg-dark bg-opacity-75 p-4 rounded">
        <h1 className="display-5 fw-bold">
          Connect Your Business to a World of Possibilities
        </h1>
        <p className="lead">
          We streamline global logistics to help you scale seamlessly and
          securely.
        </p>
        <a href="#services" className="btn btn-warning btn-lg fw-bold">
          View Services
        </a>
      </div>
    </section>
  );
}
