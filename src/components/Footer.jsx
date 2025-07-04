import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <FaFacebookF />
          <FaInstagram />
        </div>

        <div className="footer__center">
          {/* <img src={logo} alt="Restor.em logo" className="footer__logo" /> */}
          <span className="footer__title">Restor.em</span>
        </div>

        <div className="footer__right">
          <SiTiktok />
          <span className="footer__phone">+1 (234) 567-890</span>
        </div>
      </div>
    </footer>
  );
}
