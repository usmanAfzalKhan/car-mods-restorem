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
          Elevate your driving experience with Restor.em—your destination for high-quality automotive upgrades, modern tech installs, and premium detailing. From head-turning customizations to advanced safety and audio features, we treat every vehicle as a passion project. Discover how the right enhancements can make your car truly yours—crafted, protected, and ready to impress.
        </p>
      </section>
      <OffersRow />
    </div>
  );
}
