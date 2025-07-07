import React, { useState, useRef, useEffect } from "react";
import founderImg from "../assets/images/founder.jpeg";
import beforeAfterImages from "../data/beforeAfterImages";
import galleryImages from "../data/galleryImages";
import "./AboutPage.css";

export default function AboutPage() {
  // Before & After Modal
  const [modalOpen, setModalOpen] = useState(false); // false | "kazim" | number
  const [modalIndex, setModalIndex] = useState(0);
  const modalRef = useRef();

  // Our Work Modal
  const [workModalOpen, setWorkModalOpen] = useState(false); // false | number
  const [workModalIndex, setWorkModalIndex] = useState(0);
  const workModalRef = useRef();

  // Keyboard controls (ESC, arrows) for Before & After
  useEffect(() => {
    if (modalOpen === false) return;
    const handleKey = (e) => {
      if (modalOpen === false) return;
      if (e.key === "Escape") setModalOpen(false);
      if (typeof modalOpen === "number") {
        if (e.key === "ArrowRight") nextImg();
        if (e.key === "ArrowLeft") prevImg();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [modalOpen, modalIndex]);

  // Keyboard controls for Our Work gallery
  useEffect(() => {
    if (workModalOpen === false) return;
    const handleKey = (e) => {
      if (workModalOpen === false) return;
      if (e.key === "Escape") setWorkModalOpen(false);
      if (typeof workModalOpen === "number") {
        if (e.key === "ArrowRight") nextWorkImg();
        if (e.key === "ArrowLeft") prevWorkImg();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [workModalOpen, workModalIndex]);

  // Swipe support for Before & After modal (mobile)
  useEffect(() => {
    if (typeof modalOpen !== "number") return;
    let startX = 0;
    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 40) prevImg();
      if (startX - endX > 40) nextImg();
    };
    const modal = modalRef.current;
    if (modal) {
      modal.addEventListener("touchstart", onTouchStart);
      modal.addEventListener("touchend", onTouchEnd);
      return () => {
        modal.removeEventListener("touchstart", onTouchStart);
        modal.removeEventListener("touchend", onTouchEnd);
      };
    }
  });

  // Swipe support for Our Work modal (mobile)
  useEffect(() => {
    if (typeof workModalOpen !== "number") return;
    let startX = 0;
    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 40) prevWorkImg();
      if (startX - endX > 40) nextWorkImg();
    };
    const modal = workModalRef.current;
    if (modal) {
      modal.addEventListener("touchstart", onTouchStart);
      modal.addEventListener("touchend", onTouchEnd);
      return () => {
        modal.removeEventListener("touchstart", onTouchStart);
        modal.removeEventListener("touchend", onTouchEnd);
      };
    }
  });

  const openModal = (idx) => {
    if (idx === "kazim") {
      setModalOpen("kazim");
    } else {
      setModalIndex(idx);
      setModalOpen(idx);
    }
  };
  const prevImg = () =>
    setModalIndex((i) => (i === 0 ? beforeAfterImages.length - 1 : i - 1));
  const nextImg = () =>
    setModalIndex((i) =>
      i === beforeAfterImages.length - 1 ? 0 : i + 1
    );

  // Our Work gallery controls
  const openWorkModal = (idx) => {
    setWorkModalIndex(idx);
    setWorkModalOpen(idx);
  };
  const prevWorkImg = () =>
    setWorkModalIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const nextWorkImg = () =>
    setWorkModalIndex((i) =>
      i === galleryImages.length - 1 ? 0 : i + 1
    );

  return (
    <div className="about-page">
      <h1 className="about-main-title">About Restor.em</h1>
      <div className="about-intro">
        Restor.em is your trusted destination for high-end automotive customization, performance upgrades, and meticulous restoration. We blend passion with precision—offering advanced installations, modern tech, and full-spectrum detailing to elevate every aspect of your vehicle. <br /><br />
        <span className="about-points">
          Whether you’re seeking a head-turning upgrade, enhanced safety, or to simply revive your car’s original glory, our team delivers every project with integrity, expertise, and transparent pricing. Experience why car enthusiasts and everyday drivers alike trust Restor.em for exceptional results and a truly personalized service experience.
        </span>
      </div>

      <h2 className="about-section-title">Meet Kazim</h2>
      <div className="kazim-photo-container">
        <img
          src={founderImg}
          alt="Kazim, founder of Restor.em"
          className="kazim-photo"
          onClick={() => setModalOpen("kazim")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="kazim-bio">
        Kazim, our founder and lead technician, brings over six years of specialized expertise in automotive enhancement. His meticulous approach—backed by deep technical mastery—ensures each customization, from advanced stereo installs to precision headlight restorations, is executed flawlessly.
      </div>

      {/* BEFORE & AFTER GALLERY */}
      <h2 className="about-section-title">Before &amp; After Gallery</h2>
      <div className="about-gallery-instruction"><i>Tap any image to enlarge</i></div>
      <div className="before-after-gallery">
        {beforeAfterImages.map((img, i) => (
          <div className="before-after-thumb" key={i} onClick={() => openModal(i)}>
            <img src={img.src} alt={`Before & After ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Founder Modal */}
      {modalOpen === "kazim" && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" ref={modalRef} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} tabIndex={0} aria-label="Close">&times;</button>
            <img src={founderImg} alt="Kazim full" className="modal-image" />
          </div>
        </div>
      )}

      {/* Gallery Modal for Before & After */}
      {typeof modalOpen === "number" && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" ref={modalRef} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} tabIndex={0} aria-label="Close">&times;</button>
            <button className="modal-nav prev" onClick={prevImg} aria-label="Previous">&#60;</button>
            <img src={beforeAfterImages[modalIndex].src} alt={`Before & After ${modalIndex + 1}`} className="modal-image" />
            <button className="modal-nav next" onClick={nextImg} aria-label="Next">&#62;</button>
          </div>
        </div>
      )}

      {/* OUR WORK GALLERY */}
      <h2 className="about-section-title">Our Work</h2>
      <div className="about-gallery-instruction"><i>Tap any image to enlarge</i></div>
      <div className="before-after-gallery">
        {galleryImages.map((img, i) => (
          <div className="before-after-thumb" key={i} onClick={() => openWorkModal(i)}>
            <img src={img.src} alt={`Our Work ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Gallery Modal for Our Work */}
      {typeof workModalOpen === "number" && (
        <div className="modal-overlay" onClick={() => setWorkModalOpen(false)}>
          <div className="modal-content" ref={workModalRef} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setWorkModalOpen(false)} tabIndex={0} aria-label="Close">&times;</button>
            <button className="modal-nav prev" onClick={prevWorkImg} aria-label="Previous">&#60;</button>
            <img src={galleryImages[workModalIndex].src} alt={`Our Work ${workModalIndex + 1}`} className="modal-image" />
            <button className="modal-nav next" onClick={nextWorkImg} aria-label="Next">&#62;</button>
          </div>
        </div>
      )}
    </div>
  );
}
