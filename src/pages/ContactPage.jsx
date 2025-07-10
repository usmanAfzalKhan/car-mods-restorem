import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import './ContactPage.css';

const idToLabel = {
  'headlight-restoration': 'Headlight Restoration',
  'android-stereos':       'Android Stereos',
  'parking-sensors':       'Parking Sensors',
  'blindspot-monitor':     'Blindspot Monitor',
  'led-lighting':          'LED Lighting',
  'ambient-lighting':      'Ambient Lighting',
  'underglow':             'Underglow',
  'backup-camera':         'Back Up Camera',
};

export default function ContactPage() {
  const { search } = useLocation();
  const params     = new URLSearchParams(search);
  const preId      = params.get('service');
  const preLabel   = idToLabel[preId];

  const [form, setForm] = useState({
    name:         '',
    phone:        '',
    date:         '',
    services:     preLabel ? [preLabel] : [],
    otherService: '',
    message:      ''
  });
  const [errors, setErrors]       = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);

  // 👇 Auto-scroll to top when success message shows
  useEffect(() => {
    if (success) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [success]);

  const serviceOptions = [
    "Headlight Restoration",
    "Android Stereos",
    "Parking Sensors",
    "Blindspot Monitor",
    "LED Lighting",
    "Ambient Lighting",
    "Underglow",
    "Back Up Camera",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'services') {
      setForm(f => ({
        ...f,
        services: checked
          ? [...f.services, value]
          : f.services.filter(s => s !== value),
        otherService: (value === 'Other' && !checked) ? '' : f.otherService
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const formatPhone = (num) => {
    let digits = num.replace(/\D/g, '').slice(0, 10);
    if (digits.length < 10) return digits;
    return `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
  };
  const handleBlur = (e) => {
    if (e.target.name === 'phone') {
      setForm(f => ({ ...f, phone: formatPhone(f.phone) }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.match(/^\d{3}-\d{3}-\d{4}$/))
      newErrors.phone = "Enter a valid Canadian phone number (e.g., 647-555-1234).";
    if (!form.date) newErrors.date = "Preferred date is required.";
    if (!form.services.length) newErrors.services = "Select at least one service.";
    if (form.services.includes("Other") && !form.otherService.trim())
      newErrors.otherService = "Please specify the other service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/.netlify/functions/sendContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) setSuccess(true);
      else {
        const err = await res.json();
        alert('Error: ' + (err.error || 'Please try again.'));
      }
    } catch {
      alert('Network error, please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="contact-success">
        <img src={logoImg} alt="Restor.em logo" style={{ width: 120, margin: "1.2rem auto" }} />
        <h2>Thank you for your submission!</h2>
        <p>We appreciate your interest. Our team will contact you within 2–3 business days.</p>
      </div>
    );
  }

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div className="contact-page">
      <div className="contact-intro">
        You can also reach us on{" "}
        <a href="https://www.instagram.com/restor.em/?fbclid=IwY2xjawLcQEZleHRuA2FlbQIxMABicmlkETB4cEc0QWNTcEdwMlhmMHBIAR646vhNuw4Uw6SlQt_E9XaxkNssPHc7LHIqKmZQVBim9ta6o51pbPYA3jcShw_aem_WIwXopRkUf6072HQ3kHd_Q#" className="gold-link" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>,{" "}
        <a href="https://www.facebook.com/people/Restorem/61577987351506/?sk=about" className="gold-link" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>, or{" "}
        <a href="https://www.tiktok.com/@restor.emauto?fbclid=IwY2xjawLcQINleHRuA2FlbQIxMABicmlkETB4cEc0QWNTcEdwMlhmMHBIAR5V8V5DwL-yX2KMHFQLov4vsTIB9X7HxaFFrOTuLs97mf83GfvKEkokFvfP4Q_aem_Ltdd37XC4QbRsNjSVYIYUQ" className="gold-link" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>{" "}
        for the latest updates and direct messaging. Prefer to call? Contact us at{" "}
        <a href="tel:6477089050" className="gold-link">647-708-9050</a>.
      </div>

      <h1 className="contact-title">Book an Appointment</h1>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label">Name*</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number*</label>
          <input
            className="form-input"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="647-708-9050"
            required
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Preferred Date*</label>
          <input
            className="form-input"
            type="date"
            name="date"
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
            {serviceOptions.map(opt => (
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
          {form.services.includes("Other") && (
            <input
              className="form-input"
              type="text"
              name="otherService"
              value={form.otherService}
              onChange={handleChange}
              placeholder="Please specify"
            />
          )}
          {errors.services && <div className="form-error">{errors.services}</div>}
          {errors.otherService && <div className="form-error">{errors.otherService}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Additional Message</label>
          <textarea
            className="form-textarea"
            name="message"
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
