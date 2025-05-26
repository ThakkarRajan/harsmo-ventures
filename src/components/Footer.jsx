import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css"; // create this file

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
        <p className="mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} Harsmo Ventures. All rights
          reserved.
        </p>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/harsmo-ventures/"
            className="me-3 text-light"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="me-3 text-light" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
