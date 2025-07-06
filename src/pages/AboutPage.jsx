import React, { useState, useEffect } from 'react';
import './AboutPage.css';
import beforeAfterImages from '../data/beforeAfterImages';
import founderImg from '../assets/images/founder.jpeg';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');

  // Close modal with ESC key
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = e => e.key === 'Escape' && setModalOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  const openModal = (src) => {
    setModalSrc(src);
    setModalOpen(true);
  };

  return (
    <div className="about-page">
      <h1 className="section-gold">About Restor.em</h1>
      <p className="intro">
        At Restor.em, we blend precision craftsmanship with modern technology—delivering bespoke restorations and upgrades that elevate every drive. From transparent pricing to industry-leading warranties, we ensure your vehicle looks and performs at its peak.
      </p>

      <h2 className="section-gold">Meet Kazim</h2>
      <div className="kazim-photo-container">
        <img
          src={founderImg}
          alt="Kazim, founder of Restor.em"
          className="kazim-photo"
          onClick={() => openModal(founderImg)}
          tabIndex={0}
        />
      </div>
      <p className="bio">
        Kazim, our founder and lead technician, brings over six years of specialized expertise in automotive enhancement. His meticulous approach—backed by deep technical mastery—ensures each customization, from advanced stereo installs to precision headlight restorations, is executed flawlessly.
      </p>

      <h2 className="section-gold">Before &amp; After Gallery</h2>
      <p className="gallery-hint">Tap any image to enlarge</p>
      <div className="gallery-row">
        {beforeAfterImages.map((img, idx) => (
          <div
            className="thumb-item"
            key={idx}
            onClick={() => openModal(img)}
            tabIndex={0}
            aria-label={`View Before & After ${idx + 1}`}
          >
            <img src={img} alt={`Before & After ${idx + 1}`} />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close image">
              <span>&times;</span>
            </button>
            <img src={modalSrc} alt="Large preview" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}
