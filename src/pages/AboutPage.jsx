import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import founderImg from "../assets/images/founder.jpeg";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <main className="aboutpage-root">
      <section className="aboutpage-section">
        <h1 className="aboutpage-title">About Restor.em</h1>
        <p className="aboutpage-intro">
          At Restor.em, we elevate automotive craftsmanship with meticulous restorations and bespoke modifications. Our expert team leverages cutting-edge techniques and premium materials to transform every vehicle into a personalized masterpiece. From initial consultation through final inspection, we maintain the highest standards of quality—ensuring your car performs flawlessly and turns heads wherever you drive.
        </p>
      </section>

      <section className="aboutpage-section">
        <h2 className="aboutpage-sectiontitle">Why Choose Restor.em</h2>
        <ul className="aboutpage-features">
          <li>Tailored restoration & customization packages</li>
          <li>High-grade materials and advanced techniques</li>
          <li>Transparent pricing—no hidden costs</li>
          <li>Swift turnaround with dedicated support</li>
        </ul>
      </section>

      <section className="aboutpage-section">
        <h2 className="aboutpage-sectiontitle">Meet Kazim</h2>
        <div className="aboutpage-photo-glowwrap">
          <div className="aboutpage-photo-wrap">
            <img
              src={founderImg}
              alt="Kazim, founder of Restor.em"
              className="aboutpage-photo"
              onClick={() => setModalOpen(true)}
              loading="lazy"
            />
          </div>
        </div>
        <p className="aboutpage-bio">
          Kazim, our founder and master technician, brings over six years of hands-on expertise in automotive enhancement. His precision-driven philosophy and deep technical mastery ensure every project—from ambient LED integrations to full paint-protection film applications—is executed to perfection. Under his leadership, Restor.em has earned acclaim for innovation, reliability, and uncompromising attention to detail.
        </p>
      </section>

      <section className="aboutpage-section">
        <h2 className="aboutpage-sectiontitle">Gallery Preview</h2>
        <div className="aboutpage-gallery">
          {/* Gallery thumbnails here */}
        </div>
      </section>

      {modalOpen && (
        <div
          className="aboutpage-modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="aboutpage-modal-content"
            onClick={e => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              className="aboutpage-modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>
            <div className="aboutpage-modal-imgwrap">
              <img
                src={founderImg}
                alt="Kazim full"
                className="aboutpage-modal-img"
                draggable="false"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
