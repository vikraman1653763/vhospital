import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import '../style/navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import serviceLinks from '../speciality.json';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  
    // Preserve the active dropdown if menu was already open
    if (mobileMenuOpen) {
      setActiveMenu(null); // Close dropdowns only when menu is closing
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav ref={menuRef} className="navbar-container">
      <div className={`navbar ${activeMenu ? 'active' : ''}`}> 
        <div className='nav-logo'>
          <Link to="/" onClick={() => setActiveMenu(null)}>
            <img className="logooimg" src="/assets/logo.webp" alt="logo" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <IoMdClose /> : <FaBars />}
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li onClick={() => toggleMenu('specialities')}>
            <span>Specialities & Consultants</span>
          </li>
          <li className="menu-item" onClick={() => toggleMenu('academic')}>
            <span>Academic</span>
            {activeMenu === 'academic' && (
              <motion.ul 
                className="submenu-item"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <li><a href="https://venkataeswaraalliedhealthsciences.com/" target="_blank" rel="noopener noreferrer">Enroll Online</a></li>
                <li><a href="/assets/Enroll-Online.pdf" target="_blank" rel="noopener noreferrer">Download Form</a></li>
              </motion.ul>
            )}
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <AnimatePresence>
  {activeMenu === 'specialities' && (
    <motion.div
      className="types-box"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ul className="indi-type-container">
        {serviceLinks.map((speciality) => (
          <li key={speciality.id}>
            <Link to={`/speciality/${speciality.id}`} onClick={() => setActiveMenu(null)}>{speciality.title}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;
