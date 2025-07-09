// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    // Gather data from your form fields
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      services: Array.from(e.target['services'])
        .filter(input => input.checked)
        .map(input => input.value),
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz5q1kotYOss1CWuZgfFIQJoMYERrwFckT3avI85tfzUEIEVRw_X3P9aBgmPs7Q54JC/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await res.json();
      if (result.success) {
        setSubmitSuccess(true);
        e.target.reset();
      } else {
        setSubmitError("There was an error sending your message. Please try again.");
      }
    } catch (err) {
      setSubmitError("Network error. Please try again later.");
    }
    setSubmitting(false);
  };

  // Minimum date (today) for Preferred Date field
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="contact-page">
      <p className="contact-intro">
        You can also reach us on
        <a href="https://instagram.com/" className="contact-link" target="_blank" rel="noopener noreferrer"> Instagram</a>
        , <a href="https://facebook.com/" className="contact-link" target="_blank" rel="noopener noreferrer"> Facebook</a>
        , or <a href="https://tiktok.com/" className="contact-link" target="_blank" rel="noopener noreferrer"> TikTok</a>
        for the latest updates and direct messaging. Prefer to call? Contact us at <span className="contact-link">647-568-4532</span>.
      </p>
      <h1>Book an Appointment</h1>
      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="+1 234-567-8901"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">Preferred Date*</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-input"
            min={today}
            required
          />
        </div>

        <div className="form-group">
          <span className="form-label">Type of Service* <span style={{fontWeight:400, fontSize:"0.94em"}}>(Select all services that apply)</span></span>
          <div className="services-checkbox-group">
            <label>
              <input type="checkbox" name="services" value="Headlight Restoration" />
              Headlight Restoration
            </label>
            <label>
              <input type="checkbox" name="services" value="Android Stereos" />
              Android Stereos
            </label>
            <label>
              <input type="checkbox" name="services" value="Parking Sensors" />
              Parking Sensors
            </label>
            <label>
              <input type="checkbox" name="services" value="Blindspot Monitor" />
              Blindspot Monitor
            </label>
            <label>
              <input type="checkbox" name="services" value="LED Lighting" />
              LED Lighting
            </label>
            <label>
              <input type="checkbox" name="services" value="Ambient Lighting" />
              Ambient Lighting
            </label>
            <label>
              <input type="checkbox" name="services" value="Underglow" />
              Underglow
            </label>
            <label>
              <input type="checkbox" name="services" value="Back Up Camera" />
              Back Up Camera
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Additional Message</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button" disabled={submitting}>
          {submitting ? "Sending..." : "Submit"}
        </button>
        {submitSuccess && (
          <div className="form-success">Your message has been sent! Thank you.</div>
        )}
        {submitError && (
          <div className="form-error">{submitError}</div>
        )}
      </form>
    </div>
  );
}
