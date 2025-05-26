import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Navbar.css";
import harshmoventure from "../assets/logo.png";
export default function Navbar() {
  const collapseRef = useRef();

  const handleLinkClick = (target) => (e) => {
    e.preventDefault();

    const performScroll = () => {
      const section = document.querySelector(target);
      if (section) {
        const offset = document.querySelector(".navbar")?.offsetHeight || 80;
        const top = section.offsetTop - offset;

        window.scrollTo({
          top,
          behavior: "auto",
        });
      }
    };

    const isMobile = window.innerWidth < 992;
    const navbarCollapse = collapseRef.current;

    if (isMobile && navbarCollapse?.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
      setTimeout(() => performScroll(), 400); // Delay to wait for collapse animation
    } else {
      performScroll();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm py-3"
      style={{ backgroundColor: "#dae0eb" }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold text-black d-flex align-items-center"
          href="#home"
        >
          <img
            src={harshmoventure}
            alt="Harsmo Ventures Logo"
            height="55"
            className="d-inline-block me-3"
          />
          Harsmo Ventures
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav">
            {["Home", "Services", "About", "Testimonials", "Contact"].map(
              (item, index) => (
                <li className="nav-item mx-2" key={index}>
                  <a
                    className="nav-link fw-medium text-white"
                    href={`#${item.toLowerCase()}`}
                    onClick={handleLinkClick(`#${item.toLowerCase()}`)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
