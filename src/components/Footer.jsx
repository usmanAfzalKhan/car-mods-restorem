import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__main">
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
          Driven by passion. Crafted for your car.
        </div>
        <a href="tel:+1234567890" className="footer__phone">
          +1 (234) 567-890
        </a>
      </div>
      <div className="footer__copyright">
        © {new Date().getFullYear()} Restor.em. All rights reserved.
      </div>
    </footer>
  );
}
