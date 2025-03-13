import React from 'react';
// import './App.css'; // External CSS file

const DoctorsData = {
  heading: 'Meet Our Specialists',
  doctors: [
    {
      img: '/assets/hosp/krishna.webp',
      name: 'Dr. Krishna Moorthy',
      job: 'Orthologist',
    },
    {
      img: '/assets/hosp/sindhuja.webp',
      name: 'Dr. Sindhuja',
      job: 'Dermatologist',
    },

  ],
  heading2: 'Who Are We?',
  desc: 'A collaborative hospital service website is a digital platform that brings together healthcare professionals, patients and administrators to streamline and engage the delivery of healthcare services. This innovative platform allows for seamless communication and coordination among healthcare teams, enabling them to provide more efficient and personalized care to patients.',
  img: '/assets/banner4.webp',
};

const SectionWrapper = ({ id, children }) => {
  return <section className="section-wrapper" id={id}>{children}</section>;
};

const Doctor = ({ doc }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <img className="doctor-img" src={doc.img} alt={doc.name} />
      </div>
      <div className="doctor-info">
        <h5 className="doctor-name">{doc.name}</h5>
        <p className="doctor-job">{doc.job}</p>
      </div>
    </div>
  );
};

const Doctors = () => {
  return (
    <section className="doctors">
      <h3 className="doctors-heading">{DoctorsData.heading}</h3>
      <div className="doctors-list">
        {DoctorsData.doctors.map((doctor, index) => (
          <Doctor key={index} doc={doctor} />
        ))}
      </div>
      {/* <h4 className="doctors-subheading">{DoctorsData.heading2}</h4>
      <div className="doctors-description">
        {DoctorsData.desc}
      </div>
      <img className="doctors-banner" src={DoctorsData.img} alt="Banner" /> */}
    </section>
  );
};

export default Doctors;
