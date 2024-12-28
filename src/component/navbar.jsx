import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import { link } from 'framer-motion/client';

const Navbar = () => {
  const [mini, setMini] = useState(false);
  const [types, setTypes] = useState(null);
  const location = useLocation(); 

  const toggleservices = () => {
    setMini(!mini);
    setTypes(null);
  };

  const toggleTypes = (index) => {
    setTypes((prev) => (prev === index ? null : index));
  };

  const serviceLinks = [
    {
      type: 'SPECIALITIES ',
      models: [
        { name: 'Allergy & Asthma', link: '/allergy-asthma' },
        { name: 'Anaesthesiology', link: '/anaesthesiology' },
        { name: 'Cardiology', link: '/cardiology' },
        { name: 'Cardiothoracic Surgery', link: '/cardiothoracic-surgery' },
        { name: 'Counselling', link: '/counselling' },
        { name: 'Dental Surgery', link: '/dental-surgery' },
        { name: 'Dental and Maxillo-facial Surgery', link: '/dental-maxillo-facial-surgery' },
        { name: 'Dermatology', link: '/dermatology' },
        { name: 'Diabetology', link: '/diabetology' },
        { name: 'Endoscopy', link: '/endoscopy' },
        { name: 'ENT Surgery', link: '/ent-surgery' },
        { name: 'Gastroenterological Surgery', link: '/gastroenterological-surgery' },
        { name: 'Gastroenterology', link: '/gastroenterology' },
        { name: 'General and Internal Medicine', link: '/general-internal-medicine' },
        { name: 'General and Laparoscopic Surgery', link: '/general-laparoscopic-surgery' },
        { name: 'Hepatology', link: '/hepatology' },
        { name: 'Nephrology', link: '/nephrology' },
        { name: 'Neurology', link: '/neurology' },
        { name: 'Neurosurgery', link: '/neurosurgery' },
        { name: 'Obstetrics and Gynaecology', link: '/obstetrics-gynaecology' },
        { name: 'Oncological Surgery', link: '/oncological-surgery' },
        { name: 'Oncology', link: '/oncology' },
        { name: 'Ophthalmological Surgery', link: '/ophthalmological-surgery' },
        { name: 'Ophthalmology', link: '/ophthalmology' },
        { name: 'Orthopaedic Surgery', link: '/orthopaedic-surgery' },
        { name: 'Paediatrics', link: '/paediatrics' },
        { name: 'Paediatric Anaesthesiology', link: '/paediatric-anaesthesiology' },
        { name: 'Plastic Surgery', link: '/plastic-surgery' },
        { name: 'Psychiatry', link: '/psychiatry' },
        { name: 'Psychology', link: '/psychology' },
        { name: 'Pulmonology', link: '/pulmonology' },
        { name: 'Rheumatology', link: '/rheumatology' },
        { name: 'Speech Therapy', link: '/speech-therapy' },
        { name: 'Urology', link: '/urology' },
        { name: 'Vascular Surgery', link: '/vascular-surgery' },
        { name: 'Visiting Consultants', link: '/visiting-consultants' },
      ],
    },{
      type: 'CONSULTANTS ',
      models: [
        { name: 'Allergy doctor', link: '/allergy-asthma' },
      ]
    }
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
          <li onClick={toggleservices}>
            <span>SPECIALITIES & CONSULTANTS</span>
          </li>
          <li><Link to="/Contact ">CONTACT</Link></li>
        </ul>
      </div>

      <AnimatePresence>
        {mini && (
          <motion.div
            className="services-container"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            {serviceLinks.map((service, index) => (
              <div key={index} onClick={() => toggleTypes(index)} className="service-link">
                {service.type}
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
            <div className="indi-type-container">
              {serviceLinks[types].models.map((model, modelIndex) => (
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
