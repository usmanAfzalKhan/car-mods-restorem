import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Placeholder logo URL
  const logoUrl = 'https://via.placeholder.com/100?text=Logo';

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo + Site Name */}
        <Link to="/" className="header__brand">
          <img
            src={logoUrl}
            alt="Restor.em logo"
            className="header__logo"
          />
          <span className="header__title">Restor.em</span>
        </Link>

        {/* Hamburger */}
        <button
          className="header__burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <div className={`burger ${menuOpen ? 'burger--open' : ''}`} />
        </button>

        {/* Nav */}
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
);
}
