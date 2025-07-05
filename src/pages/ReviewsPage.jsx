import React, { useState } from 'react';
import { reviews as initialReviews } from '../data/reviews';
import ReviewForm from '../components/ReviewForm';
import './ReviewsPage.css';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);

  const handleAddReview = (newReview) => {
    setReviews([
      ...reviews,
      { id: Date.now(), ...newReview }
    ]);
  };

  return (
    <div className="reviews-page">
      <h1 className="reviews-title">What Our Customers Say</h1>

      <div className="reviews-grid">
        {reviews.map(({ id, name, rating, text }) => (
          <div className="review-card" key={id}>
            <div className="review-rating">
              {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
            </div>
            <p className="review-text">“{text}”</p>
            <p className="review-author">— {name}</p>
          </div>
        ))}
      </div>

      <button
        className="add-review-button"
        onClick={() => setShowForm(true)}
      >
        Add a Review
      </button>

      {showForm && (
        <ReviewForm
          onClose={() => setShowForm(false)}
          onSubmit={handleAddReview}
        />
      )}
    </div>
  );
}
