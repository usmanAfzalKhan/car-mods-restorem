import React, { useRef, useEffect } from 'react';
import './ContactPage.css';

const SERVICES = [
  { value: "headlight-restoration", label: "Headlight Restoration" },
  { value: "android-stereos", label: "Android Stereos" },
  { value: "parking-sensors", label: "Parking Sensors" },
  { value: "blindspot-monitor", label: "Blindspot Monitor" },
  { value: "led-lighting", label: "LED Lighting" },
  { value: "ambient-lighting", label: "Ambient Lighting" },
  { value: "underglow", label: "Underglow" },
  { value: "back-up-camera", label: "Back Up Camera" }
];

export default function ContactPage() {
  // Prevent selecting past dates
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const minDate = `${yyyy}-${mm}-${dd}`;

  return (
    <div className="contact-page">
      <p className="contact-info">
        You can also reach us on{' '}
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="invisible-link">Instagram</a>,{' '}
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="invisible-link">Facebook</a>, or{' '}
        <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" className="invisible-link">TikTok</a>
        {' '}for the latest updates and direct messaging. Prefer to call? Contact us at{' '}
        <a href="tel:6475684532" className="contact-phone invisible-link">647-568-4532</a>.
      </p>
      <h1>Book an Appointment</h1>
      <form className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name<span className="required-star">*</span>
          </label>
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
          <label htmlFor="phone" className="form-label">
            Phone Number<span className="required-star">*</span>
          </label>
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
          <label htmlFor="date" className="form-label">
            Preferred Date<span className="required-star">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-input"
            required
            min={minDate}
          />
        </div>

        <div className="form-group">
          <div className="form-label">Type of Service<span className="required-star">*</span></div>
          <div className="checkbox-group">
            {SERVICES.map(service => (
              <label key={service.value} className="checkbox-label">
                <input
                  type="checkbox"
                  name="service"
                  value={service.value}
                  className="service-checkbox"
                />
                <span>{service.label}</span>
              </label>
            ))}
          </div>
          <small className="select-help">Select all services that apply</small>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Additional Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}
