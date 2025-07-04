import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Restor.em</h1>
      <p className="intro">
        At Restor.em, we specialize in comprehensive automotive restorations and customizations—delivering premium service tailored to your needs. With industry-leading warranties, transparent pricing, and fast turnaround, we ensure every vehicle leaves our shop performing and looking its best.
      </p>

      <ul className="features-list">
        <li>Personalized service tailored to your needs</li>
        <li>Premium parts and industry-leading warranties</li>
        <li>Transparent pricing—no hidden fees</li>
        <li>Fast turnaround and friendly support</li>
      </ul>

      <h2>Meet Kazim</h2>
      <div className="kazim-photo-container">
        {/* swap this src when you have the real portrait */}
        <img
          src="/assets/kazim.jpg"
          alt="Kazim, founder of Restor.em"
          className="kazim-photo"
          onClick={() => window.open('/assets/kazim.jpg', '_blank')}
        />
      </div>
      <p className="bio">
        Kazim, the founder and lead technician of Restor.em, brings over a decade of hands-on expertise in automotive customization. His precision-driven approach and deep understanding of vehicle systems ensure every modification—from advanced stereo installations to precision headlight restorations—is executed flawlessly. Under his leadership, Restor.em has earned a reputation for quality, reliability, and uncompromising attention to detail.
      </p>

      <h2>Gallery Preview</h2>
      <div className="gallery-preview">
        {/* drop your preview images here */}
      </div>
    </div>
  );
}
