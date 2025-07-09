import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <p
        style={{
          textAlign: "center",
          maxWidth: 540,
          margin: "0 auto 1.3em auto",
          fontSize: "1.08em",
          color: "#e3dfd2",
        }}
      >
        We’re dedicated to delivering exceptional results. Explore a selection of our most popular services, trusted by clients who value quality and care.
      </p>
      <h1 className="services-title">Our Services</h1>
      <div className="services-flex-outer">
        <div className="services-flex">
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
    </div>
  );
}
