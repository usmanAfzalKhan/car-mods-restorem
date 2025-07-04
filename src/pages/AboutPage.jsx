import React, { useState } from 'react';
import './AboutPage.css';

const sampleImages = [
  'https://via.placeholder.com/200?text=Proj+1',
  'https://via.placeholder.com/200?text=Proj+2',
  'https://via.placeholder.com/200?text=Proj+3',
  'https://via.placeholder.com/200?text=Proj+4',
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const ownerPhoto = 'https://via.placeholder.com/300?text=Kazim';

  return (
    <div className="about-page">
      {/* What Is Restor.em */}
      <section className="about__section">
        <h1>What Is Restor.em?</h1>
        <p>
          Restor.em is a specialist car modification shop dedicated to
          elevating your ride with top‐quality parts and expert installation.
          From headlight restoration to ambient lighting, our certified
          technicians bring professional craftsmanship to every project.
        </p>
      </section>

      {/* Why Choose Restor.em */}
      <section className="about__section about__why">
        <h2>Why Choose Restor.em?</h2>
        <ul>
          <li>Personalized service tailored to your needs</li>
          <li>Premium parts and industry‐leading warranties</li>
          <li>Transparent pricing—no hidden fees</li>
          <li>Fast turnaround and friendly support</li>
        </ul>
      </section>

      {/* Meet Kazim */}
      <section className="about__section about__owner">
        <h2>Meet Kazim</h2>
        <hr className="about__divider" />
        <img
          src={ownerPhoto}
          alt=""
          className="about__owner-img"
          onClick={() => setModalOpen(true)}
        />
        <p>
          Kazim, the founder and lead technician of Restor.em, brings over a
          decade of hands-on expertise in automotive customization. His
          precision-driven approach and deep understanding of vehicle systems
          ensure every modification—from advanced stereo installations to
          precision headlight restorations—is executed flawlessly. Under his
          leadership, Restor.em has earned a reputation for quality,
          reliability, and uncompromising attention to detail.
        </p>
      </section>

      {/* Gallery Preview */}
      <section className="about__section about__gallery">
        <h2>Gallery Preview</h2>
        <div className="about__gallery-grid">
          {sampleImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project ${i + 1}`}
              className="about__gallery-img"
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="about__modal" onClick={() => setModalOpen(false)}>
          <img
            src={ownerPhoto}
            alt="Kazim, enlarged"
            className="about__modal-img"
          />
        </div>
      )}
    </div>
  );
}
