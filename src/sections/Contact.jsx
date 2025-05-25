import React from "react";
// import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="callback-form">
        <h2>Request a Call Back</h2>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Business Type" />
          <input placeholder="Phone Number" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </section>
  );
}
