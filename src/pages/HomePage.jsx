import React from 'react';
import Hero from '../components/Hero';
import OffersRow from '../components/OffersRow';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <section className="homepage-welcome">
        <h1>Welcome to Restor.em</h1>
        <p>
          This is your homepage placeholder—here will go the hero slider,
          offers, and welcome message.
        </p>
      </section>
      <OffersRow />
    </div>
  );
}
