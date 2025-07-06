import React, { useState } from 'react';
import './Hero.css';
import logo from '../assets/images/logo.png';
import welcomeImg from '../assets/images/hero-welcome.png';
import headlightImg from '../assets/images/hero-headlight-restoration.png';
import androidStereoImg from '../assets/images/hero-android-stereo.png';
import parkingSensorsImg from '../assets/images/hero-parking-sensors.png';
import blindspotMonitorImg from '../assets/images/hero-blindspot-monitor.png';
import ledLightingImg from '../assets/images/hero-led-lighting.png';
import ambientLightingImg from '../assets/images/hero-ambient-lighting.png';
import underglowImg from '../assets/images/hero-underglow.png';
import backupCameraImg from '../assets/images/hero-backup-camera.png';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 0,
    imageUrl: welcomeImg,
    // Logo, statement, and button will show; heading/subtitle/button not used
    statement: 'Redefine your ride with trusted car mods & upgrades.'
  },
  {
    id: 1,
    imageUrl: headlightImg,
    title: 'Headlight Restoration',
    subtitle: 'Bright. Safe. Like new.',
    button: { label: 'See Details', path: '/services/headlight-restoration' }
  },
  {
    id: 2,
    imageUrl: androidStereoImg,
    title: 'Android Stereos',
    subtitle: 'Modern tech. Seamless sound.',
    button: { label: 'See Details', path: '/services/android-stereos' }
  },
  {
    id: 3,
    imageUrl: parkingSensorsImg,
    title: 'Parking Sensors',
    subtitle: 'Park with total confidence.',
    button: { label: 'See Details', path: '/services/parking-sensors' }
  },
  {
    id: 4,
    imageUrl: blindspotMonitorImg,
    title: 'Blindspot Monitor',
    subtitle: 'Drive safer. See more.',
    button: { label: 'See Details', path: '/services/blindspot-monitor' }
  },
  {
    id: 5,
    imageUrl: ledLightingImg,
    title: 'LED Lighting',
    subtitle: 'Sharper looks. Better vision.',
    button: { label: 'See Details', path: '/services/led-lighting' }
  },
  {
    id: 6,
    imageUrl: ambientLightingImg,
    title: 'Ambient Lighting',
    subtitle: 'Set the perfect mood.',
    button: { label: 'See Details', path: '/services/ambient-lighting' }
  },
  {
    id: 7,
    imageUrl: underglowImg,
    title: 'Underglow',
    subtitle: 'Glow beneath. Stand out.',
    button: { label: 'See Details', path: '/services/underglow' }
  },
  {
    id: 8,
    imageUrl: backupCameraImg,
    title: 'Back Up Camera',
    subtitle: 'Reverse smarter. Park easier.',
    button: { label: 'See Details', path: '/services/back-up-camera' }
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const len = slides.length;

  const next = () => setCurrent(current === len - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? len - 1 : current - 1);

  return (
    <section className="hero">
      <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Previous slide">‹</button>
      <div className="hero__slider" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div className="hero__slide" key={slide.id}>
            <img src={slide.imageUrl} alt={slide.title || "Restor.em"} className="hero__image" draggable={false} />

            {slide.id === 0 ? (
              // Welcome hero
              <div className="hero__welcome-content">
                <img src={logo} alt="Restor.em logo" className="hero__logo-centered" />
                <div className="hero__welcome-statement">{slide.statement}</div>
                <button
                  className="hero__button hero__button--center"
                  onClick={() => navigate('/services')}
                >
                  View Services
                </button>
              </div>
            ) : (
              <>
                <img src={logo} alt="Restor.em logo" className="hero__logo-overlay" />
                <div className="hero__overlay-content">
                  <h2 className="hero__heading">{slide.title}</h2>
                  <p className="hero__subtitle">{slide.subtitle}</p>
                  <button
                    className="hero__button"
                    onClick={() => navigate(slide.button.path)}
                  >
                    {slide.button.label}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Next slide">›</button>
      <div className="hero__indicators">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`hero__dot${current === idx ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
