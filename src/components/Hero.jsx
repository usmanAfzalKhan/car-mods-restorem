import React, { useState } from 'react';
import './Hero.css';

const slides = [
  { id: 1, caption: 'Headlight Restoration', imageUrl: 'https://via.placeholder.com/1600x600?text=Headlight+Restoration' },
  { id: 2, caption: 'Android Stereos',         imageUrl: 'https://via.placeholder.com/1600x600?text=Android+Stereos' },
  { id: 3, caption: 'Parking Sensors',         imageUrl: 'https://via.placeholder.com/1600x600?text=Parking+Sensors' },
  { id: 4, caption: 'Blindspot Monitor',       imageUrl: 'https://via.placeholder.com/1600x600?text=Blindspot+Monitor' },
  { id: 5, caption: 'LED Lighting',            imageUrl: 'https://via.placeholder.com/1600x600?text=LED+Lighting' },
  { id: 6, caption: 'Ambient Lighting',        imageUrl: 'https://via.placeholder.com/1600x600?text=Ambient+Lighting' },
  { id: 7, caption: 'Underglow',               imageUrl: 'https://via.placeholder.com/1600x600?text=Underglow' },
  { id: 8, caption: 'Back Up Camera',          imageUrl: 'https://via.placeholder.com/1600x600?text=Back+Up+Camera' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const len = slides.length;

  const next = () => setCurrent(current === len - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? len - 1 : current - 1);

  return (
    <section className="hero">
      <button className="hero__arrow hero__arrow--left" onClick={prev}>‹</button>

      <div
        className="hero__slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map(s => (
          <div className="hero__slide" key={s.id}>
            <img src={s.imageUrl} alt={s.caption} className="hero__image" />
            <h2 className="hero__caption">{s.caption}</h2>
          </div>
        ))}
      </div>

      <button className="hero__arrow hero__arrow--right" onClick={next}>›</button>
    </section>
  );
}
