import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__social">
        <a
          href="https://facebook.com/RestorEm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/RestorEm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com/@RestorEm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
      </div>
      <div className="footer__tagline">
        Engineered for performance. Built for you.
      </div>
      <div className="footer__phone-wrap">
        <a href="tel:+6477089050" className="footer__phone">
          +1 (647) 708-9050
        </a>
      </div>
      <div className="footer__copyright">
        Restor.em. All rights reserved.
      </div>
    </footer>
  );
}
