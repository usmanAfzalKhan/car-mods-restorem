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

  // Format price for display
  function renderPrice(price) {
    if (typeof price === "number") {
      return <span className="price-big">${price}</span>;
    }
    // For range: $80–$300
    if (typeof price === "string" && price.includes("$")) {
      const match = price.match(/(\$[\d]+)(–\$?[\d]+)/);
      if (match) {
        return (
          <>
            <span className="price-big">{match[1]}</span>{match[2]}
          </>
        );
      }
    }
    return <span className="price-big">{price}</span>;
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
              Starting from{renderPrice(service.price)}
            </div>
            <button className="book-button">Book Now</button>
          </div>
        </div>

        {/* Pros section */}
        <div className="detail-row" style={{ marginTop: "0.9rem" }}>
          <div className="what-included" style={{ width: "100%" }}>
            <h2>Pros</h2>
            <ul>
              {service.pros.map((item, i) => (
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
