import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import serviceLinks from '../speciality.json'; // Import the JSON data

const Navbar = () => {
  const [mini, setMini] = useState(false);
  const [subs, setSubs] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false); 
  const location = useLocation();

  const toggleSubs= () => {
    setSubs(!subs);
    if(mini){
      setMini(false);
    }
  };
  
  const toggleAcademic = () => {
    setAcademicOpen(!academicOpen); 
  };
  const toggleservices = () => {
    setMini(!mini);
  };
  
  useEffect(() => {
    setMini(false);
    setSubs(null);
    setAcademicOpen(false);
  }, [location]);

  return (
    <nav>
      <div className="navbar">
        <div className='nav-logo'>
          <Link to="/">
            <img className="logooimg" src="/assets/logo.webp" alt="logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/service">SERVICES</Link></li>
          <li onClick={toggleSubs} >
            <span>SPECIALITIES & CONSULTANTS</span>
          </li>
          <li className="menu-item" onClick={toggleAcademic}>
            <span>ACADEMIC</span>
            {academicOpen && (
            <motion.ul 
              className="submenu-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <li><a href="https://venkataeswaraalliedhealthsciences.com/">Enroll Online</a></li>
              <li><a href="/assets/Enroll-Online.pdf" target="_blank" rel="noopener noreferrer">Download Form</a></li>
              </motion.ul>
          )}

          </li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>

      <AnimatePresence>
        {subs && (
          <motion.div
            className="sub-container"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
     
            <li onClick={toggleservices}>SPECIALITIES</li>
            <li>CONSULTANTS</li>
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {mini && (
          <motion.div
            className="types-box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >

            <div className="indi-type-container">
              {serviceLinks.map((speciality) => (
                <li key={speciality.id}>
                  <Link to={`/speciality/${speciality.id}`}>{speciality.title}</Link>
                </li>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
