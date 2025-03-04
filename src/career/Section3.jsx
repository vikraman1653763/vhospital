import React from 'react';
import { FaHospital } from "react-icons/fa";
const Section3 = () => {
  return (
    <section className="career-sec-3-container">
        {/* <FaHospital className='career-hosp'/> */}
      <div className="career-sec-3-content">
        <div className='career-sec-3-content-box-1'>

        <h2 className="career-sec-3-title">Why Work With Us?</h2>
        <p className="career-sec-3-description">
        Join Venkataeswara Hospital for a fulfilling career where you can make a real impact. We offer a supportive work environment, growth opportunities, and a commitment to compassionate patient care.
        </p>
        <div className="career-sec-3-cards">
          <div className="career-sec-3-card">
            <h3>Compassionate Work Culture</h3>
            <p>Be a part of a team that values empathy and teamwork.</p>
          </div>
          <div className="career-sec-3-card">
            <h3>Professional Growth</h3>
            <p>Access to training, skill development, and career advancement.</p>
          </div>
        </div>
        </div>
        <div className="career-sec-3-cards">
        <div className='career-sec-3-content-box-2'>
          <div className="career-sec-3-card">
            <h3>Impact Lives Every Day</h3>
            <p>Play a crucial role in enhancing patient well-being.</p>
          </div>
          <div className="career-sec-3-card">
            <h3>State-of-the-Art Facilities</h3>
            <p>Work with cutting-edge medical technology and research.</p>
          </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
