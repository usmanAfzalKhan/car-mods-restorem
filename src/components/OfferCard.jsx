import React, { useState } from 'react';
import './OfferCard.css';

export default function OfferCard({ title, imageUrl, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="offer-card">
      <div
        className="offer-card__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => setOpen(o => !o)}
      >
        <h3 className="offer-card__title">{title}</h3>
      </div>

      {open && (
        <div className="offer-card__details">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}
