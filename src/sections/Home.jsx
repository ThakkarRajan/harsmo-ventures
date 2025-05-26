import React, { useRef } from "react";
import heroImg from "../assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

export default function Hero() {
  const collapseRef = useRef();

  const handleLinkClick = (target) => (e) => {
    e.preventDefault();

    const scrollToSection = () => {
      const section = document.querySelector(target);
      if (section) {
        const offset = document.querySelector(".navbar")?.offsetHeight || 80;
        const top = section.offsetTop - offset;
        window.scrollTo({ top }); // Native scroll-behavior from CSS will apply
      }
    };

    const isMobile = window.innerWidth < 992;
    const navbarCollapse = collapseRef.current;

    if (isMobile && navbarCollapse?.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
      setTimeout(() => scrollToSection(), 350); // delay until menu collapses
    } else {
      scrollToSection();
    }
  };

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
      <div className="container custom-width mb-5 bg-dark bg-opacity-75 p-5 rounded">
        <h1 className="display-5 fw-bold">
          Specialize in sourcing and distributing a wide range of products
        </h1>
        <p className="lead">
          Harsmo Ventures is a dynamic import-export company dedicated to
          bridging global markets by providing high-quality products and
          exceptional service.
        </p>
        <button
          className="btn btn-warning btn-lg fw-bold"
          onClick={handleLinkClick("#services")}
        >
          View Services
        </button>
      </div>
    </section>
  );
}
