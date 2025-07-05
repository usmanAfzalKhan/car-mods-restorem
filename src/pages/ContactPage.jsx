// src/pages/ContactPage.jsx
import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Book an Appointment</h1>
      <form className="contact-form" noValidate>
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service" className="form-label">Type of Service*</label>
          <select
            id="service"
            name="service"
            className="form-input"
            required
          >
            <option value="">Select a service…</option>
            <option value="headlight-restoration">Headlight Restoration</option>
            <option value="android-stereos">Android Stereos</option>
            <option value="parking-sensors">Parking Sensors</option>
            <option value="blindspot-monitor">Blindspot Monitor</option>
            <option value="led-lighting">LED Lighting</option>
            <option value="ambient-lighting">Ambient Lighting</option>
            <option value="underglow">Underglow</option>
            <option value="back-up-camera">Back Up Camera</option>
          </select>
        </div>

        <div className="form-group radio-group">
          <span className="form-label">Have you been referred?*</span>
          <label>
            <input type="radio" name="referred" value="yes" required /> Yes
          </label>
          <label>
            <input type="radio" name="referred" value="no" required /> No
          </label>
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

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
);
}
