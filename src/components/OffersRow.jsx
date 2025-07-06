import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OffersRow.css";
import bundleImg from '../assets/images/offer-bundle-save.png';

const offer = {
  id: 1,
  title: "Bundle & Save",
  subtitle: "Upgrade more, pay less",
  desc: "Get exclusive discounts when you book two or more services together—perfect for total car transformations.",
  image: bundleImg,
};

export default function OffersRow() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExpand = () => setExpanded((prev) => !prev);
  const handleBook = () => {
    navigate("/contact", { state: { service: offer.title } });
  };

  return (
    <section className="offers-row-restorem">
      <h2 className="offers-section-heading">Special Offer</h2>
      <div className="offers-row-center">
        <div
          className={`offer-card-restorem${expanded ? " expanded" : ""}`}
          onClick={handleExpand}
          tabIndex={0}
          role="button"
        >
          <div className="offer-image-wrap">
            <img
              src={offer.image}
              alt={offer.title}
              className="offer-image-restorem"
              draggable={false}
            />
          </div>
          <div className="offer-title-area">
            <div className="offer-title-restorem">{offer.title}</div>
            <div className="offer-subtitle-restorem">{offer.subtitle}</div>
          </div>
          <div
            className={`offer-details-restorem${expanded ? " expanded" : ""}`}
            onClick={e => e.stopPropagation()}
            style={{
              maxHeight: expanded ? '250px' : '0',
              opacity: expanded ? 1 : 0,
              pointerEvents: expanded ? 'auto' : 'none',
              transition: 'max-height 0.25s cubic-bezier(.3,.85,.53,1), opacity 0.18s'
            }}
          >
            <div className="offer-desc-restorem">{offer.desc}</div>
            <button
              className="offer-book-btn-restorem"
              onClick={e => { e.stopPropagation(); handleBook(); }}
              tabIndex={expanded ? 0 : -1}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
