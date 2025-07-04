import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const services = [
  { id: 1, name: 'Headlight Restoration', img: 'https://via.placeholder.com/300?text=Headlight' },
  { id: 2, name: 'Android Stereos',       img: 'https://via.placeholder.com/300?text=Stereo' },
  { id: 3, name: 'Parking Sensors',       img: 'https://via.placeholder.com/300?text=Sensors' },
  { id: 4, name: 'Blindspot Monitor',     img: 'https://via.placeholder.com/300?text=Blindspot' },
  { id: 5, name: 'LED Lighting',          img: 'https://via.placeholder.com/300?text=LED' },
  { id: 6, name: 'Ambient Lighting',      img: 'https://via.placeholder.com/300?text=Ambient' },
  { id: 7, name: 'Underglow',             img: 'https://via.placeholder.com/300?text=Underglow' },
  { id: 8, name: 'Back Up Camera',        img: 'https://via.placeholder.com/300?text=Backup' },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map(s => (
          <div className="service-card" key={s.id}>
            <img
              src={s.img}
              alt={s.name}
              className="service-img"
              onClick={() => window.open(s.img, '_blank')}
            />
            <h2 className="service-name">{s.name}</h2>
            <Link to={`/services/${s.id}`} className="service-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
