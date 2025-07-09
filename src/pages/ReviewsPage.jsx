// src/pages/ReviewsPage.jsx
import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  where,
  limit,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase";
import ReviewForm from "../components/ReviewForm";
import "./ReviewsPage.css";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  // Fetch the latest 6 reviews with rating >= 4
  const fetchReviews = async () => {
    const q = query(
      collection(db, "reviews"),
      where("rating", ">=", 4),
      orderBy("timestamp", "asc"),
      limit(6)
    );
    const snapshot = await getDocs(q);
    const data = [];
    snapshot.forEach(docSnap => {
      data.push({ id: docSnap.id, ...docSnap.data() });
    });
    setReviews(data.sort((a, b) => b.timestamp - a.timestamp)); // newest first
  };

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line
  }, []);

  const handleAddReview = async (newReview) => {
    const rating = parseInt(newReview.rating, 10);
    const text = newReview.text.trim();
    const name = newReview.name.trim();

    // If it's under 4 stars, silently "accept" but do nothing
    if (rating < 4) {
      setThankYou(true);
      return;
    }

    // If it contains profanity, silently "accept" but do nothing
    const profanityRegex = /\b(fuck|shit|damn|bitch|asshole|crap)\b/i;
    if (profanityRegex.test(text)) {
      setThankYou(true);
      return;
    }

    // Otherwise prepare the review object
    const reviewWithTimestamp = {
      name,
      rating,
      text,
      timestamp: Date.now()
    };

    console.log("Submitting to Firestore:", reviewWithTimestamp);

    // Add to Firestore
    await addDoc(collection(db, "reviews"), reviewWithTimestamp);

    // If more than 6 reviews, delete the oldest one
    const qAll = query(
      collection(db, "reviews"),
      where("rating", ">=", 4),
      orderBy("timestamp", "asc")
    );
    const allSnap = await getDocs(qAll);
    if (allSnap.size > 6) {
      const oldest = allSnap.docs[0];
      await deleteDoc(doc(db, "reviews", oldest.id));
    }

    // Refresh and show thank-you
    fetchReviews();
    setThankYou(true);
  };

  return (
    <div className="reviews-page">
      <p
        style={{
          textAlign: "center",
          maxWidth: 540,
          margin: "0 auto 1.3em auto",
          fontSize: "1.08em",
          color: "#e3dfd2",
        }}
      >
        We take pride in our work, but don’t just take our word for it. Here’s what real customers say about their experience with us—genuine, honest, and unfiltered.
      </p>
      <h1 className="reviews-title">What Our Customers Say</h1>

      <div className="reviews-grid">
        {reviews.map(({ id, name, rating, text }) => (
          <div className="review-card" key={id}>
            <div className="review-rating">
              {"★".repeat(rating) + "☆".repeat(5 - rating)}
            </div>
            <p className="review-text">“{text}”</p>
            <p className="review-author">— {name}</p>
          </div>
        ))}
      </div>

      {!thankYou && (
        <>
          <button
            className="add-review-button"
            onClick={() => setShowForm(true)}
          >
            Add a Review
          </button>
          <div className="add-review-footer-gap" />
        </>
      )}

      {thankYou && (
        <p className="thank-you-message">Thanks for your review!</p>
      )}

      {showForm && !thankYou && (
        <ReviewForm
          onClose={() => setShowForm(false)}
          onSubmit={handleAddReview}
        />
      )}
    </div>
  );
}
