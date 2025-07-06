import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/images/logo.png'; // Update path if needed

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo + Site Name */}
        <Link to="/" className="header__brand">
          <img
            src={logoImg}
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
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
