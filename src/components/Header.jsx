import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import your logo file when you have it
// import logo from '../assets/logo.svg';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo + Site Name */}
        <Link to="/" className="header__brand">
          {/* <img src={logo} alt="Restor.em logo" className="header__logo" /> */}
          <span className="header__title">Restor.em</span>
        </Link>

        {/* Hamburger toggle (mobile) */}
        <button
          className="header__burger"
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle navigation"
        >
          <div className={`burger ${menuOpen ? 'burger--open' : ''}`} />
        </button>

        {/* Navigation links */}
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <Link to="/"    onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about"    onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/reviews"  onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link to="/contact"  onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
