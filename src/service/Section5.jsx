import React from 'react';
import { FaHeartbeat, FaSearch, FaHandsHelping, FaClinicMedical } from 'react-icons/fa';
import { IoDiamond } from "react-icons/io5";

const Section5 = () => {
  return (
    <section className="service-sec-5">
        <div className='service-sec-5-bg'>
        <IoDiamond/>
        </div>
      <div className="service-sec-5-content">
        <div className="service-sec-5-image">
          <img src="/specialityimg/counsel.png" alt="Health Checkups" />
        </div>
        <div className="service-sec-5-text">
          <h2 className="service-sec-5-title">HEALTH CHECKUPS</h2>
          <p className="service-sec-5-description">
            Venkataeswara Hospitals offers comprehensive health checks that help you get started on the journey to good health. 
            These checks are not only to assess your present health status, but also to screen for any risk factors.
          </p>
          <ul className="service-sec-5-points">
            <li>
              <FaHeartbeat className="service-sec-5-icon" />
              <span>Target, reduce and eliminate health risks</span>
            </li>
            <li>
              <FaSearch className="service-sec-5-icon" />
              <span>Discover potential health problems</span>
            </li>
            <li>
              <FaHandsHelping className="service-sec-5-icon" />
              <span>Promote holistic wellness</span>
            </li>
            <li>
              <FaClinicMedical className="service-sec-5-icon" />
              <span>Facilitate prompt, expert and compassionate treatment of existing injuries and diseases</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section5;
