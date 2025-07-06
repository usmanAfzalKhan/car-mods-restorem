import React, { useEffect, useRef } from "react";
import "./GalleryModal.css";

export default function GalleryModal({ images, current, onClose, setCurrent }) {
  const imgRef = useRef();

  // ESC, arrow navigation
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
    // eslint-disable-next-line
  }, [current, images.length]);

  // Swipe support
  useEffect(() => {
    let x0 = null;
    let y0 = null;
    const handleTouchStart = (e) => {
      if (!e.touches) return;
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      if (!x0 || !y0) return;
      let dx = e.touches[0].clientX - x0;
      let dy = e.touches[0].clientY - y0;
      if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) prev();
        else next();
        x0 = y0 = null;
      }
    };
    const node = imgRef.current;
    if (node) {
      node.addEventListener("touchstart", handleTouchStart);
      node.addEventListener("touchmove", handleTouchMove);
    }
    return () => {
      if (node) {
        node.removeEventListener("touchstart", handleTouchStart);
        node.removeEventListener("touchmove", handleTouchMove);
      }
    };
    // eslint-disable-next-line
  }, [current, images.length]);

  function prev(e) {
    if (e) e.stopPropagation();
    setCurrent((cur) => (cur - 1 + images.length) % images.length);
  }
  function next(e) {
    if (e) e.stopPropagation();
    setCurrent((cur) => (cur + 1) % images.length);
  }

  return (
    <div className="gallerymodal-overlay" onClick={onClose}>
      <div className="gallerymodal-content" onClick={e => e.stopPropagation()} tabIndex={-1}>
        <button className="gallerymodal-close" onClick={onClose} aria-label="Close">&times;</button>
        <button className="gallerymodal-arrow left" onClick={prev} aria-label="Previous">&lt;</button>
        <div className="gallerymodal-imgwrap">
          <img
            ref={imgRef}
            src={images[current]}
            alt=""
            className="gallerymodal-img"
            draggable="false"
          />
        </div>
        <button className="gallerymodal-arrow right" onClick={next} aria-label="Next">&gt;</button>
        <div className="gallerymodal-counter">
          {current + 1} of {images.length}
        </div>
      </div>
    </div>
  );
}
