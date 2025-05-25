import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Contact.css";

export default function Contact() {
  const form = useRef();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytvced7",
        "template_2yh11xm",
        form.current,
        "MDyFq28ntdAfbKym7"
      )
      .then(
        () => {
          setShowSnackbar(true);
          form.current.reset();
          setTimeout(() => setShowSnackbar(false), 3000);
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-vh-100 bg-gradient position-relative d-flex flex-column justify-content-center"
      style={{ backgroundColor: "#dae0eb" }}
    >
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4 display-5 text-gradient-orange">
          Request a Call Back
        </h2>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-12 col-lg-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white p-5 rounded shadow-lg contact-form h-100"
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="name">
                  <i className="bi bi-person-fill me-2"></i>Full Name
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <label htmlFor="email">
                  <i className="bi bi-envelope-fill me-2"></i>Email Address
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="business"
                  name="business_type"
                  placeholder="Business Type"
                  required
                />
                <label htmlFor="business">
                  <i className="bi bi-briefcase-fill me-2"></i>Business Type
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <label htmlFor="phone">
                  <i className="bi bi-telephone-fill me-2"></i>Phone Number
                </label>
              </div>

              <div className="form-floating mb-4">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  style={{ height: "120px" }}
                  required
                ></textarea>
                <label htmlFor="message">
                  <i className="bi bi-chat-left-text-fill me-2"></i>Your Message
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-warning btn-lg px-5 rounded-pill shadow"
                >
                  Submit
                </button>
              </div>

              {showSnackbar && (
                <div
                  className="alert alert-success alert-dismissible fade show mt-4"
                  role="alert"
                >
                  ✅ Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Google Map */}
          <div className="col-12 col-lg-6">
            <div className="rounded shadow overflow-hidden h-100">
              <iframe
                title="HarsMo Ventures Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2852767713216!2d70.80240007389806!3d22.267180944097724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbfaf7ae8099%3A0xab2c8a49466ddfda!2sHarsMo%20Ventures!5e0!3m2!1sen!2sca!4v1748202141530!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ minHeight: "600px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
