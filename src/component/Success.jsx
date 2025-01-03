  import React from 'react';
  import { MdRocketLaunch } from "react-icons/md";
  import '../style/success.css';

  const Email = () => {
     
    
      return (
        <div className="success-container">
          <div className="success-content">
            <div className="success-text">
              <h2 className="success-title">Email Sent Successfully!</h2>
              <div className="success-icon">
                {/* <img 
                  src="/assets/success.webp" 
                  alt="success image" 
                  className="success-img" 
                /> */}
                <MdRocketLaunch />
              </div>
              <p className="success-description">
              Your message has been successfully sent to our hospital. Thank you for reaching out! Our team has received your inquiry and will respond to you as soon as possible.
              </p>
            
            
            </div>
          </div>
        </div>
      );
    };
    

  export default Email;

