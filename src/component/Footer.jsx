import React from 'react';
import '../style/footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <h2 className="footer-logo-text">Venkataeswara Hospital</h2>
          <div className='footer-logo-container'>

          <img src='/assets/logo.webp' className='footer-logo-image'/>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-quick-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/specialities" className="footer-link">Specialities</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3 className="footer-title">Specialities & Consultants</h3>
          <ul className="footer-service-link">
            <li>Anaesthesiology</li>
            <li>Cardiology</li>
            <li>Cardiothoracic Surgery</li>
            <li>Counselling</li>
            <li>Dental Surgery</li>
            <li>Dental and Maxillo-facial Surgery</li>
            <li>Dermatology</li>
            <li>Diabetology</li>
            <li>Endoscopy</li>
            <li>ENT Surgery</li>
            <li>Gastroenterological Surgery</li>
            <li>Gastroenterology</li>
            <li>General and Internal Medicine</li>
            <li>General and Laparoscopic Surgery</li>
            <li>Hepatology</li>
            <li>Nephrology</li>
            <li>Neurology</li>
            <li>Neurosurgery</li>
            <li>Obstetric & Gynaecological Surgery</li>
            <li>Obstetrics and Gynaecology</li>
            <li>Oncological Surgery</li>
            <li>Oncology</li>
            <li>Ophthalmological Surgery</li>
            <li>Ophthalmology</li>
            <li>Orthopaedic Surgery</li>
            <li>Paediatrics</li>
            <li>Paediatric Anaesthesiology</li>
            <li>Plastic Surgery</li>
            <li>Psychiatry</li>
            <li>Psychology</li>
            <li>Pulmonology</li>
            <li>Rheumatology</li>
            <li>Speech Therapy</li>
            <li>Urological Surgery</li>
            <li>Urology</li>
            <li>Vascular Surgery</li>
            <li>Visiting Consultants</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-divider" />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © 2024 Venkataeswara Hospital</p>
          <p> developed by <a href="/" className="footer-developer-link">devzen</a>
        </p>
        <div className="footer-social-icons">
          <a href="https://facebook.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
          <a href="https://linkedin.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
