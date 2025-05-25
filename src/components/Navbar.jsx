import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Navbar.css";

export default function Navbar() {
  const collapseRef = useRef();

  const handleLinkClick = (target) => (e) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      const offset = document.querySelector(".navbar")?.offsetHeight || 80;

      smoothScrollTo(section.offsetTop - offset, 800);
    }

    setTimeout(() => {
      if (collapseRef.current?.classList.contains("show")) {
        collapseRef.current.classList.remove("show");
      }
    }, 400);
  };

  const smoothScrollTo = (targetY, duration = 600) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;

    // If scroll distance is very small, just scroll instantly
    if (Math.abs(distance) < 50) {
      window.scrollTo(0, targetY);
      return;
    }

    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutQuad(progress);
      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeOutQuad = (t) => t * (2 - t);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm py-3"
      style={{ backgroundColor: "#dae0eb" }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-black" href="#home">
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
