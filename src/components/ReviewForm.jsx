import React, { useState, useEffect, useRef } from 'react';
import './ReviewForm.css';

export default function ReviewForm({ onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({ name: '', rating: '', text: '' });
  const boxRef = useRef();

  // ESC to close
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // click outside to close
  const handleOverlayClick = e => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      onClose();
    }
  };

  const validate = () => {
    const newErrors = { name: '', rating: '', text: '' };
    if (!name.trim()) newErrors.name = 'Please enter your name.';
    if (!rating)     newErrors.rating = 'Please select a rating.';
    if (!text.trim()) newErrors.text = 'Please write your review.';
    setErrors(newErrors);
    return !newErrors.name && !newErrors.rating && !newErrors.text;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ name: name.trim(), rating: Number(rating), text: text.trim() });
    onClose();
  };

  const clearError = field => {
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div
      className="review-form-overlay"
      onMouseDown={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="review-form-box"
        ref={boxRef}
        onMouseDown={e => e.stopPropagation()}
      >
        <button
          className="review-form-close"
          onClick={onClose}
          aria-label="Close review form"
        >×</button>

        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label className="review-form-label">
            Your Name<span className="review-form-required">*</span>
            <input
              type="text"
              value={name}
              onChange={e => { setName(e.target.value); clearError('name'); }}
              placeholder="Enter your name"
              required
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>

          <label className="review-form-label">
            Rating<span className="review-form-required">*</span>
            <select
              value={rating}
              onChange={e => { setRating(e.target.value); clearError('rating'); }}
              required
            >
              <option value="" disabled>Select a rating</option>
              {[5,4,3,2,1].map(n => (
                <option key={n} value={n}>
                  {'★'.repeat(n) + '☆'.repeat(5 - n)}
                </option>
              ))}
            </select>
            {errors.rating && <div className="error">{errors.rating}</div>}
          </label>

          <label className="review-form-label">
            Review<span className="review-form-required">*</span>
            <textarea
              value={text}
              onChange={e => { setText(e.target.value); clearError('text'); }}
              rows="4"
              placeholder="Write your review here"
              required
            />
            {errors.text && <div className="error">{errors.text}</div>}
          </label>

          <button type="submit" className="review-form-submit">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
