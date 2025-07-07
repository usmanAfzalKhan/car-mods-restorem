import React, { useEffect, useRef, useCallback } from "react";
import "./GalleryModal.css";

export default function GalleryModal({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}) {
  const imgRef = useRef(null);
  const touchStartX = useRef(null);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Swipe support
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current !== null && e.changedTouches && e.changedTouches.length === 1) {
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (diff > 45) onPrev();
      else if (diff < -45) onNext();
      touchStartX.current = null;
    }
  };

  return (
    <div
      className="gallerymodal-overlay"
      onClick={onClose}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="gallerymodal-content"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="gallerymodal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <button
          className="gallerymodal-arrow left"
          onClick={onPrev}
          aria-label="Previous"
        >
          ‹
        </button>
        <div
          className="gallerymodal-imgwrap"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            ref={imgRef}
            src={images[index]}
            className="gallerymodal-img"
            alt=""
            draggable="false"
          />
        </div>
        <button
          className="gallerymodal-arrow right"
          onClick={onNext}
          aria-label="Next"
        >
          ›
        </button>
        <div className="gallerymodal-counter">
          {index + 1} of {images.length}
        </div>
      </div>
    </div>
  );
}
