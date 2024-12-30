import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Section7 = () => {
  return (
    <div className="home-sec-7-container">
      <div className="home-sec-7-content">
        <h1 className="home-sec-7-title">Get in Touch with Us</h1>
        <p className="home-sec-7-description">
          We’d love to hear from you! If you have any questions or would like to get in touch with our team, feel free to contact us.
        </p>
        <Link to="/contact" className="home-sec-7-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default Section7;
