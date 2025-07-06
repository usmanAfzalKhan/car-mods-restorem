import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer_row">
        <div className="footer__social">
          <a
            href="https://facebook.com/RestorEm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__icon-link"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/RestorEm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer__icon-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@RestorEm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="footer__icon-link"
          >
            <FaTiktok />
          </a>
        </div>
        <div className="footer__tagline">
          Driven by passion. Crafted for your car.
        </div>
        <div className="footer__contact">
          <a href="tel:+1234567890" className="footer__contact-btn">
            +1 (234) 567-890
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} Restor.em. All rights reserved.
      </div>
    </footer>
  );
}
