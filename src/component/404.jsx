import React from 'react';
import { TbError404 } from "react-icons/tb";
import '../style/err.css';

const Error404 = () => {
  return (
    <div className="err-container">
      <div className="err-content">
        <div className="err-text">
          <h2 className="err-title">Page Not Found!</h2>
          <div className="err-icon">
            <TbError404 />
          </div>
          <p className="err-description">
            Oops! The page you are looking for does not exist. Please check the URL or go back to the homepage.
          </p>
          <button className='err-button'>Go To Home</button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
