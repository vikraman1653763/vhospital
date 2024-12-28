import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mini, setMini] = useState(false);
  const [types, setTypes] = useState(null);
  const location = useLocation(); 

  const toggleFuture = () => {
    setMini(!mini);
    setTypes(null);
  };

  const toggleTypes = (index) => {
    setTypes((prev) => (prev === index ? null : index));
  };

  const droneLinks = [
    {
      type: '111',
      models: [
        { name: '1', link: '/1' },
        { name: '1', link: '/1' },
        { name: '1', link: '/1' },
      ],
    },
    {
      type: '222',
      models: [
        { name: '1', link: '/1' },
        { name: '1', link: '/1' },
      ],
    },
   
    
  ];

  // Close dropdowns when the route changes
  useEffect(() => {
    setMini(false);
    setTypes(null);
  }, [location]);

  return (
    <nav>
      <div className="navbar">
        <div className='nav-logo'>

        <Link to="/">
        <img className="logooimg" src="/assets/logo.webp" alt="logo" />
        <img className="logooimg" src="/assets/emergency.webp" alt="logo" />
        </Link>
        </div>
        <ul>
        
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li onClick={toggleFuture}>
            <span>SPECIALITIES & CONSULTANTS</span>
          </li>
          <li><Link to="/Contact ">CONTACT</Link></li>
        </ul>
      </div>

      <AnimatePresence>
        {mini && (
          <motion.div
            className="future-container"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            {droneLinks.map((drone, index) => (
              <div key={index} onClick={() => toggleTypes(index)} className="drone-link">
                {drone.type}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {types !== null && (
          <motion.div
            className="types-box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="future-type-container">
              {droneLinks[types].models.map((model, modelIndex) => (
                <Link key={modelIndex} to={model.link}>
                  {model.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;

