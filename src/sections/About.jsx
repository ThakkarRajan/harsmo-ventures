import React, { useState } from "react";
import aboutImage from "../assets/hero.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Animation.css";
import "../styles/About.css"; // custom styling moved to new file

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="container py-5">
        <h2 className="text-center display-6 fw-bold text-gradient-orange mb-5">
          About Us
        </h2>
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center">
            <img
              src={aboutImage}
              alt="About us"
              className="about-image shadow img-fluid"
            />
          </div>
          <div className="col-md-6 about-text">
            <p className="lead text-dark fst-italic mb-4">
              “We are committed to delivering value, reliability, and seamless
              connections that empower our partners to grow and succeed
              globally.”
            </p>

            {!showMore ? (
              <button
                className="btn btn-warning btn-lg fw-semibold"
                onClick={() => setShowMore(true)}
              >
                Read More
              </button>
            ) : (
              <div className="fade-in-up">
                <p className="text-dark">
                  We provide flexible logistics and sourcing solutions designed
                  to meet the evolving needs of modern businesses. Our approach
                  emphasizes efficiency, transparency, and reliability at every
                  step of the process.
                </p>
                <p className="text-dark">
                  Whether you're scaling operations, optimizing supply chains,
                  or entering new markets, our team ensures smooth coordination
                  and continuous support.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
