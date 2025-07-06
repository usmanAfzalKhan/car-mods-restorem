import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/images/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <img
            src={logoImg}
            alt="Restor.em logo"
            className="header__logo"
            draggable={false}
          />
          <div className="header__brandtext">
            <span className="header__brand-main">Restor</span>
            <span className="header__brand-dot">.em</span>
          </div>
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className={`header__burger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>

        {/* Nav links */}
        <nav className={`header__nav${menuOpen ? ' is-open' : ''}`}>
          <NavLink to="/"       className="header__link" onClick={() => setMenuOpen(false)} end>Home</NavLink>
          <NavLink to="/about"  className="header__link" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" className="header__link" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/reviews"  className="header__link" onClick={() => setMenuOpen(false)}>Reviews</NavLink>
          <NavLink to="/faq"      className="header__link" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
          <NavLink to="/contact"  className="header__link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
);
}
