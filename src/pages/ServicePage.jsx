import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServicePage.css';

const services = [
  { id: 1, name: 'Headlight Restoration', img: 'https://via.placeholder.com/800x400?text=Headlight+Restoration' },
  { id: 2, name: 'Android Stereos',       img: 'https://via.placeholder.com/800x400?text=Android+Stereos' },
  { id: 3, name: 'Parking Sensors',       img: 'https://via.placeholder.com/800x400?text=Parking+Sensors' },
  { id: 4, name: 'Blindspot Monitor',     img: 'https://via.placeholder.com/800x400?text=Blindspot+Monitor' },
  { id: 5, name: 'LED Lighting',          img: 'https://via.placeholder.com/800x400?text=LED+Lighting' },
  { id: 6, name: 'Ambient Lighting',      img: 'https://via.placeholder.com/800x400?text=Ambient+Lighting' },
  { id: 7, name: 'Underglow',             img: 'https://via.placeholder.com/800x400?text=Underglow' },
  { id: 8, name: 'Back Up Camera',        img: 'https://via.placeholder.com/800x400?text=Back+Up+Camera' },
];

export default function ServicePage() {
  const { id } = useParams();
  const service = services.find(s => String(s.id) === id);

  if (!service) {
    return <div className="service-page"><h2>Service not found.</h2></div>;
  }

  return (
    <div className="service-page">
      <h1>{service.name}</h1>
      <img src={service.img} alt={service.name} className="service-page-img" />
      <p className="service-page-desc">
        {/* Replace this with the actual wireframe content */}
        Detailed information about <strong>{service.name}</strong> goes here.
        Describe the process, benefits, pricing, etc., in a clear, professional way.
      </p>
      <Link to="/services" className="back-button">
        ← Back to Services
      </Link>
    </div>
  );
}
