import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/special-template.css';
import { FaUserDoctor } from "react-icons/fa6";

const SpecialityPage = ({ data }) => {
  const [validData, setValidData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS with a duration of 500ms
  }, []);

  useEffect(() => {
    if (data) {
      setValidData(data);
    } else {
      console.error('Invalid data format: expected an object.');
    }
  }, [data]);

  return (
    <div className="special-container">
      {validData ? (
        <div className="special-page">
          {/* Title */}
          <h1 className="special-title" >{validData.title}</h1>

          {/* First Section */}
          <div className="special-section" >
            <div className="special-text" data-aos="fade-right">{validData.description1}</div>
            <div className="special-image">
              <img src={validData.image} alt={validData.title} />
            </div>
          </div>

          {/* Second Section */}
          <div className="special-section" data-aos="fade-up">
            <div className="special-logo">
              <img src={validData.logo} alt={validData.title} />
            </div>
            <div className="special-text-2" data-aos="fade-left">{validData.description2}</div>
          </div>

          {/* Third Section */}
          <div className="special-section" data-aos="fade-up">
            <div className="special-text">{validData.description3}</div>
          </div>

          {/* Our Doctors Section (Only if doctors are available) */}
          {validData.doctors && validData.doctors.length > 0 && (
            <div className="doctors-section" >
              <h3 className="doctors-title">Our Doctors</h3>
              <div className="doctors-list">
                {validData.doctors.map((doctor, index) => (
                  <div className="doctors-card" key={index} data-aos="fade-up">
                    <div className="doctors-img-container">
                      <FaUserDoctor className='doctors-img'/>
                    </div>
                    <div className="doctor-info">
                      <h4 className="doctor-name">{doctor.doctor_name}</h4>
                      <p className="doctor-specialist">{doctor.specialist}</p>
                      <p className="doctor-time">Available: {doctor.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p data-aos="fade-up">No data available to display.</p>
      )}
    </div>
  );
};

export default SpecialityPage;
