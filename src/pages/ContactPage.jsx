import React, { useState } from "react";
import logoImg from "../assets/images/logo.png";
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle field changes (checkbox logic for multi-select)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "services") {
      setForm((f) => ({
        ...f,
        services: checked
          ? [...f.services, value]
          : f.services.filter((s) => s !== value),
      }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  // Format phone number on blur (Canadian 10-digit)
  const formatPhone = (num) => {
    let digits = num.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 10) return digits;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handleBlur = (e) => {
    if (e.target.name === "phone") {
      setForm((f) => ({ ...f, phone: formatPhone(f.phone) }));
    }
  };

  // Validation for required fields
  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.match(/^\d{3}-\d{3}-\d{4}$/))
      newErrors.phone =
        "Enter a valid Canadian phone number (e.g., 647-555-1234).";
    if (!form.date) newErrors.date = "Preferred date is required.";
    if (!form.services.length)
      newErrors.services = "Select at least one service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/.netlify/functions/sendContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const err = await res.json();
        alert("There was an error: " + (err.error || "Please try again."));
      }
    } catch (err) {
      alert("Network error, please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="contact-success">
        <img
          src={logoImg}
          alt="Restor.em logo"
          style={{ width: 120, margin: "1.2rem auto" }}
        />
        <h2>Thank you for your submission!</h2>
        <p>
          We appreciate your interest. Our team will contact you within 2-3
          business days.
        </p>
      </div>
    );
  }

  // Service options for checkboxes
  const serviceOptions = [
    "Headlight Restoration",
    "Android Stereos",
    "Parking Sensors",
    "Blindspot Monitor",
    "LED Lighting",
    "Ambient Lighting",
    "Underglow",
    "Back Up Camera",
  ];

  // restrict date input
  const minDate = new Date().toISOString().split("T")[0];

  return (
    <div className="contact-page">
      <div className="contact-intro">
        You can also reach us on{" "}
        <a
          href="https://instagram.com/"
          className="contact-link only-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        ,{" "}
        <a
          href="https://facebook.com/"
          className="contact-link only-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        , or{" "}
        <a
          href="https://tiktok.com/"
          className="contact-link only-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>{" "}
        for the latest updates and direct messaging. Prefer to call? Contact us
        at{" "}
        <a href="tel:6475684532" className="contact-link only-gold">
          647-568-4532
        </a>
        .
      </div>

      <h1 className="contact-main-title">Book an Appointment</h1>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label">Name*</label>
          <input
            name="name"
            className="form-input"
            value={form.name}
            onChange={handleChange}
            required
            maxLength={50}
            autoComplete="off"
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number*</label>
          <input
            name="phone"
            className="form-input"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="647-555-1234"
            required
            maxLength={12}
            autoComplete="off"
            inputMode="numeric"
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">Preferred Date*</label>
          <input
            type="date"
            name="date"
            className="form-input"
            value={form.date}
            onChange={handleChange}
            min={minDate}
            required
          />
          {errors.date && <div className="form-error">{errors.date}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">
            Type of Service* (Select all that apply)
          </label>
          <div className="services-checkbox-group">
            {serviceOptions.map((opt) => (
              <label key={opt} className="checkbox-label">
                <input
                  type="checkbox"
                  name="services"
                  value={opt}
                  checked={form.services.includes(opt)}
                  onChange={handleChange}
                />{" "}
                {opt}
              </label>
            ))}
          </div>
          {errors.services && (
            <div className="form-error">{errors.services}</div>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Additional Message</label>
          <textarea
            name="message"
            className="form-textarea"
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <button className="submit-button" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
