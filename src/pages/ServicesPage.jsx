import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <div className="service-image-wrap">
              <img
                src={s.imgUrl}
                alt={s.title}
                className="service-image"
                loading="lazy"
              />
            </div>
            <h2 className="service-name">{s.title}</h2>
            <div className="service-footer">
              <Link to={`/services/${s.id}`} className="service-button">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
