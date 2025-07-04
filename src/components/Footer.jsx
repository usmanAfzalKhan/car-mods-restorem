import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <a href="#" aria-label="Facebook" className="footer-icon">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram" className="footer-icon">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-center">
        Restor.em
      </div>

      <div className="footer-right">
        <a href="#" aria-label="TikTok" className="footer-icon">
          <SiTiktok />
        </a>
        <a href="tel:+1234567890" className="footer-phone">
          +1 (234) 567-890
        </a>
      </div>
    </footer>
  );
}
