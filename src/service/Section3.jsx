import React from 'react';
import {FaFire, FaHeartbeat, FaMedkit, FaHospital, FaWeight, FaStethoscope, FaPlusCircle } from 'react-icons/fa'; // Import relevant icons
import { GiKidneys,GiLiver } from "react-icons/gi";

const Section3 = () => {
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
    <section className="service-sec-3">
      <div className="service-sec-3-content">
        <div className="service-sec-3-image">
          <img src="/specialityimg/counsel.png" alt="Dietary Services" />
        </div>
        <div className="service-sec-3-text">
          <h2 className="service-sec-3-title">DIETARY SERVICES</h2>
          <p className="service-sec-3-description">
            Our full-time dietary department at Venkataeswara Hospitals is responsible for providing the healthiest food possible for both patients and visitors.
            Our dietitians have the expertise to advise patients undergoing treatment in the following clinical areas:
          </p>
        </div>
      </div>
      <div className="service-sec-3-cards">
        {clinicalAreas.map((area, index) => (
          <div className="service-sec-3-card" key={index}>
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