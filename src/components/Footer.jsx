import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__social">
        <a
          href="https://www.facebook.com/people/Restorem/61577987351506/?sk=about"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/restor.em/?fbclid=IwY2xjawLcQEZleHRuA2FlbQIxMABicmlkETB4cEc0QWNTcEdwMlhmMHBIAR646vhNuw4Uw6SlQt_E9XaxkNssPHc7LHIqKmZQVBim9ta6o51pbPYA3jcShw_aem_WIwXopRkUf6072HQ3kHd_Q#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@restor.emauto?fbclid=IwY2xjawLcQINleHRuA2FlbQIxMABicmlkETB4cEc0QWNTcEdwMlhmMHBIAR5V8V5DwL-yX2KMHFQLov4vsTIB9X7HxaFFrOTuLs97mf83GfvKEkokFvfP4Q_aem_Ltdd37XC4QbRsNjSVYIYUQ"
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
        <a href="tel:6477089050" className="footer__phone">
          +1 (647) 708-9050
        </a>
      </div>
      <div className="footer__copyright">Restor.em. All rights reserved.</div>
    </footer>
  );
}
