import React from 'react';
import Hero from '../components/Hero';
import OfferCard from '../components/OfferCard';
import './HomePage.css';

const offers = [
  {
    title: '10% Off Exhaust Upgrades',
    imageUrl: 'https://via.placeholder.com/600x400?text=Exhaust',
    details: 'Upgrade your exhaust system and save 10% on labor this month.',
  },
  {
    title: 'Custom Wheel Packages',
    imageUrl: 'https://via.placeholder.com/600x400?text=Wheels',
    details: 'Choose from a wide range of rims—get free mounting & balancing!',
  },
  // add more offers here…
];

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />

      <section className="offers">
        {offers.map(o => (
          <OfferCard
            key={o.title}
            title={o.title}
            imageUrl={o.imageUrl}
            details={o.details}
          />
        ))}
      </section>

      <section className="welcome">
        <h2>Welcome to Restor.em</h2>
        <p>
          At Restor.em we specialize in high-quality car modifications—from
          performance exhausts to custom wheel packages. Browse our latest
          offers above and book your next upgrade today!
        </p>
      </section>
    </div>
  );
}
