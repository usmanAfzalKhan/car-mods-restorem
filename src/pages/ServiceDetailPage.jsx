// src/pages/ServiceDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p className="not-found">Service not found.</p>;
  }

  const summary = service.description.split('. ')[0] + '.';
  const bullets = service.description
    .split('. ')
    .map((str) => str.replace(/\.$/, '').trim())
    .filter((str) => str.length);

  return (
    <div className="service-detail-page">
      <h1 className="detail-title">{service.title}</h1>
      <p className="detail-summary">{summary}</p>

      <div className="detail-content">
        <div className="what-included">
          <h2>What’s Included:</h2>
          <ul>
            {bullets.map((item, i) => (
              <li key={i}>{item}.</li>
            ))}
          </ul>
        </div>

        <div className="price-box">
          <h2>Pricing</h2>
          <p>
            Starting from <strong>${service.price}</strong>
          </p>
          <button className="book-button">Book Now</button>
        </div>
      </div>

      <img
        src={service.imgUrl}
        alt={service.title}
        className="detail-image"
      />

      <button
        className="back-button"
        onClick={() => navigate('/services')}
      >
        ← Back to Services
      </button>
    </div>
  );
}
