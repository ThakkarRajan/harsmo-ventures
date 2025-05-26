import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CompanyInfo.css";

export default function CompanyInfo() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* New Top SVG Divider */}
      {/* <div className="svg-divider-top">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            fill="#dae0eb"
            d="M0,80 C360,160 1080,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div> */}
      <section
        className="company-info-section text-dark py-5 min-vh-100"
        style={{ backgroundColor: "#dae0eb" }}
      >
        <div className="container">
          <h2
            className="text-center display-5 fw-bold mb-5 text-gradient-orange"
            data-aos="fade-up"
          >
            Our Mission, Vision & Values
          </h2>

          <div className="row g-4 mb-5">
            {[
              {
                title: "Mission",
                desc: "Connecting global markets with quality products and reliable service to build lasting partnerships.",
                icon: "bi-globe2",
              },
              {
                title: "Vision",
                desc: "To be a top global import-export firm known for innovation, trust, and growth.",
                icon: "bi-lightbulb-fill",
              },
              {
                title: "Values",
                desc: "We act with honesty, transparency, and respect.",
                icon: "bi-shield-check",
              },
            ].map((item, i) => (
              <div
                className="col-md-4"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="modern-card text-center h-100 p-4">
                  <div className="card-glow" />
                  <i
                    className={`bi ${item.icon} display-6 mb-3 text-warning`}
                  ></i>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-center fw-bold mb-4" data-aos="fade-up">
            What Makes Us Experts
          </h3>

          <div className="row g-4">
            {[
              {
                title: "Comprehensive Trading Services",
                desc: "Our services support small retailers to global enterprises.",
                icon: "bi-diagram-3-fill",
              },
              {
                title: "Quality Assurance & Pricing",
                desc: "We maintain high quality while offering competitive pricing.",
                icon: "bi-currency-dollar",
              },
              {
                title: "Strong Global Partnerships",
                desc: "We build trusted relationships across borders.",
                icon: "bi-hand-thumbs-up",
              },
              {
                title: "Customer-Centric Service",
                desc: "Personalized support and transparent communication.",
                icon: "bi-chat-dots-fill",
              },
            ].map((item, i) => (
              <div
                className="col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="modern-card d-flex p-4 h-100">
                  <i className={`bi ${item.icon} fs-4 text-warning me-3`}></i>
                  <div>
                    <h6 className="fw-bold mb-2">{item.title}</h6>
                    <p className="text-secondary mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* New Bottom SVG Divider
      <div className="svg-divider-bottom">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            fill="#dae0eb"
            d="M0,100 C400,0 1040,180 1440,80 L1440,150 L0,150 Z"
          ></path>
        </svg>
      </div> */}
    </>
  );
}
