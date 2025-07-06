import React, { useState } from 'react';
import beforeAfterImages from '../data/beforeAfterImages';
import founderImg from '../assets/images/founder.jpeg';
import './AboutPage.css';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="about-page">
      <h1 className="about-heading">About Restor.em</h1>
      <p className="intro">
        Restor.em delivers high-quality automotive restorations and customizations—blending advanced techniques with a commitment to transparency, speed, and exceptional results. Each project receives the same precision and pride, ensuring your vehicle is both functional and stunning.
      </p>

      <ul className="features-list">
        <li>Tailored restoration &amp; customization packages</li>
        <li>High-grade materials and advanced techniques</li>
        <li>Transparent pricing—no hidden costs</li>
        <li>Swift turnaround with dedicated support</li>
      </ul>

      <h2 className="section-heading">Meet Kazim</h2>
      <div className="kazim-photo-container">
        <img
          src={founderImg}
          alt="Kazim, founder of Restor.em"
          className="kazim-photo"
          onClick={() => { setModalOpen(true); setModalImg(founderImg); }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <p className="bio">
        Kazim, our founder and lead technician, brings over six years of specialized expertise in automotive enhancement. His meticulous approach—backed by deep technical mastery—ensures each customization, from advanced stereo installs to precision headlight restorations, is executed flawlessly.
      </p>

      <h2 className="section-heading">Before &amp; After Gallery</h2>
      <div className="gallery-caption">Tap any image to enlarge</div>
      <div className="before-after-gallery">
        {beforeAfterImages.map((img, i) => (
          <div
            key={i}
            className="before-after-thumb"
            onClick={() => { setModalOpen(true); setModalImg(img.src); }}
            tabIndex={0}
            role="button"
            aria-label={`View ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} className="before-after-img" loading="lazy" />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">&times;</button>
            <img src={modalImg} alt="" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}
