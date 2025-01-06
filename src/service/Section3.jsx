import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaFire,
  FaHeartbeat,
  FaMedkit,
  FaWeight,
  FaStethoscope,
  FaPlusCircle,
} from 'react-icons/fa'; // Import relevant icons
import { GiKidneys, GiLiver } from 'react-icons/gi';

const Section3 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); // Initialize AOS with a duration of 600ms
  }, []);

  const clinicalAreas = [
    { name: 'Cardiology', icon: <FaHeartbeat /> },
    { name: 'Diabetes', icon: <FaMedkit /> },
    { name: 'Respiratory diseases', icon: <FaStethoscope /> },
    { name: 'Renal failure', icon: <GiKidneys /> },
    { name: 'Liver failure', icon: <GiLiver /> },
    { name: 'Post-operative care', icon: <FaPlusCircle /> },
    { name: 'Total parental feeding', icon: <FaMedkit /> },
    { name: 'Burns', icon: <FaFire /> },
    { name: 'Attempted weight loss or weight gain', icon: <FaWeight /> },
  ];

  return (
    <section className="service-sec-3" id='diet'>
      {/* Content Section */}
      <div className="service-sec-3-content">
        <div
          className="service-sec-3-image"
          data-aos="fade-right" // Animation for the image
        >
          <img src="/assets/diet.webp" alt="Dietary Services" />
        </div>
        <div
          className="service-sec-3-text"
          data-aos="fade-left" // Animation for the text
        >
          <h2 className="service-sec-3-title">DIETARY SERVICES</h2>
          <p className="service-sec-3-description">
            Our full-time dietary department at Venkataeswara Hospitals is
            responsible for providing the healthiest food possible for both
            patients and visitors. Our dietitians have the expertise to advise
            patients undergoing treatment in the following clinical areas:
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="service-sec-3-cards">
        {clinicalAreas.map((area, index) => (
          <div
            className="service-sec-3-card"
            key={index}
            data-aos="fade-up" // Animation for each card
            data-aos-delay={index * 100} // Staggered animation delay
          >
            <div className="service-sec-3-card-icon">{area.icon}</div>
            <h3>{area.name}</h3>
            <p>Expert dietary guidance for patients with {area.name.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
