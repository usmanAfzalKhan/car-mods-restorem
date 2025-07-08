import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import "./ServiceDetailPage.css";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p className="not-found">Service not found.</p>;
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-center">
        <h1 className="detail-title">{service.title}</h1>
        <div className="detail-desc">
          <p>{service.description}</p>
        </div>

        <div className="detail-row">
          <div className="what-included">
            <h2>What's Included</h2>
            <ul>
              {service.whatsIncluded.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="price-section price-boxed">
            <h2 className="price-title">Pricing</h2>
            <div className="price-desc highlight-price">
              Starting at <span className="price-big">${service.price}</span>
            </div>
            <button className="book-button">Book Now</button>
          </div>
        </div>

        <div className="pros-cons-row">
          <div className="pros-section pros-cons-shared">
            <h2>Pros</h2>
            <ul>
              {service.pros.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="cons-section pros-cons-shared">
            <h2>Cons</h2>
            <ul>
              {service.cons.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-image-center">
          <img
            src={service.imgUrl}
            alt={service.title}
            className="detail-image"
          />
        </div>

        <button className="back-button" onClick={() => navigate("/services")}>
          ← Back to Services
        </button>
      </div>
    </div>
  );
}
