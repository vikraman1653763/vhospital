import React from 'react';
import '../style/footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare, FaGooglePlusSquare } from "react-icons/fa";
import specialityData from '../speciality.json'; 
import { Link } from 'react-router-dom';

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
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/service" className="footer-link">Service</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="https://venkataeswaraalliedhealthsciences.com/" className="footer-link">Academic</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3 className="footer-title">Specialities & Consultants</h3>
          <ul className="footer-service-link">
           {specialityData.map((speciality)=>(
            <li key={speciality.id}>
            <Link to={`/speciality/${speciality.id}`}>{speciality.title}</Link>
            </li>
           ))}
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
          <a href="https://www.facebook.com/Venkataeswara/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://x.com/VHChennai" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/vhospitals/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
          <a href="https://www.linkedin.com/company/venkataeswara-hospitals/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/channel/UCJf2urcw-GriRfa1Iu8MeGQ/about" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare />
          </a>
            <a href="https://www.google.com/search?hl=en-IN&gl=in&q=Venkataeswara+Hospitals,+36+-+A,+Chamiers+Rd,+Nandanam+Extension,+Nandanam,+Chennai,+Tamil+Nadu+600035&ludocid=15776484453524650638&lsig=AB86z5VFIl2VqfAOS8TVTkzIWeer#lrd=0x3a5267b1f0f26955:0xdaf15505e8cf3a8e,3" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <FaGooglePlusSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
