import React, { useState } from "react";
import aboutImage from "../assets/hero.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Animation.css";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="min-vh-100 d-flex align-items-center text-dark"
      style={{ backgroundColor: "#dae0eb" }}
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

            {!showMore && (
              <button
                className="btn btn-warning btn-lg fw-semibold"
                onClick={() => setShowMore(true)}
              >
                Read More
              </button>
            )}

            {showMore && (
              <div className="mt-4 fade-in-up">
                <p className="text-secondary">
                  From warehousing and distribution to freight forwarding...
                </p>
                <p className="text-secondary">
                  🌐 Serving clients globally
                  <br />
                  🚛 Real-time tracking
                  <br />
                  🤝 Dedicated account managers
                  <br />
                  🛠️ Scalable solutions for growing needs
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
