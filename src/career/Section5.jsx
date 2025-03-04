import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Section5 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); 
  }, []);

  return (
    <div className="career-sec-5-container">
      <div className="career-sec-5-content">
        <h1 className="career-sec-5-title">Apply Now</h1>
        <p className="career-sec-5-description">
        Be the reason someone smiles today. Join Venkataeswara Hospital and embark on a fulfilling healthcare career!
        </p>
        <p className="career-sec-5-description">
        Send your resume to: <a href="mailto:hrd@vhospitals.com"> <MdEmail/> hrd@vhospitals.com</a>
        </p>
        <p className="career-sec-5-description">
        For inquiries, contact:   <FaPhoneAlt /> 8056137662 <FaPhoneAlt /> 9941121555
        </p>
      </div>
    </div>
  );
};

export default Section5;
