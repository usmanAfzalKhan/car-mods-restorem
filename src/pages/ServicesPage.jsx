// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map(s => (
          <div className="service-card" key={s.id}>
            <img src={s.imgUrl} alt={s.title} className="service-image"/>
            <h2 className="service-title">{s.title}</h2>
            <Link to={`/services/${s.id}`} className="service-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
