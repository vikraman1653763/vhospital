import React from 'react';
import bannerImg from '/assets/banner5.webp'; // Fixed path
import { MdOutlineSanitizer } from "react-icons/md";

const Section9 = () => {
  const Banner1Data = {
    heading: 'We Are Always Here To Ensure Best Medical Treatment',
    texts: [
      'Easy make appointment',
      'Top specialist doctors',
      '24/7 service',
      'Discount for all medical treatments',
      'Enrolment is quick and easy',
    ],
    img: bannerImg,
  };

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h3 className="banner-heading">{Banner1Data.heading}</h3>
        <ul className="banner-list">
          {Banner1Data.texts.map((text, index) => (
            <li key={index} className="list-item"> {/* Added key */}
              <MdOutlineSanitizer className="list-icon" />
              <p className="list-text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="banner-image-container">
        <img src={Banner1Data.img} alt="Banner1" className="banner-image" />
      </div>
    </div>
  );
};

export default Section9;
