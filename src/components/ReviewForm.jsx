import React, { useState } from 'react';
import './ReviewForm.css';

export default function ReviewForm({ onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({ name: '', rating: '', text: '' });

  const validate = () => {
    const newErrors = { name: '', rating: '', text: '' };
    if (!name.trim()) newErrors.name = 'Please enter your name.';
    if (!rating)     newErrors.rating = 'Please select a rating.';
    if (!text.trim()) newErrors.text = 'Please write your review.';
    setErrors(newErrors);
    return !newErrors.name && !newErrors.rating && !newErrors.text;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ name: name.trim(), rating: Number(rating), text: text.trim() });
    onClose();
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="review-form-overlay">
      <div className="review-form-box">
        <button
          className="review-form-close"
          onClick={onClose}
          aria-label="Close review form"
        >
          ×
        </button>
        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label>
            Your Name
            <input
              type="text"
              value={name}
              onChange={e => { setName(e.target.value); clearError('name'); }}
              placeholder="Enter your name"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>

          <label>
            Rating
            <select
              value={rating}
              onChange={e => { setRating(e.target.value); clearError('rating'); }}
              aria-required="true"
            >
              <option value="" disabled>
                Select a rating
              </option>
              {[5,4,3,2,1].map(n => (
                <option key={n} value={n}>
                  {'★'.repeat(n) + '☆'.repeat(5-n)}
                </option>
              ))}
            </select>
            {errors.rating && <div className="error">{errors.rating}</div>}
          </label>

          <label>
            Review
            <textarea
              value={text}
              onChange={e => { setText(e.target.value); clearError('text'); }}
              rows="4"
              placeholder="Write your review here"
            />
            {errors.text && <div className="error">{errors.text}</div>}
          </label>

          <button
            type="submit"
            className="review-form-submit"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
