import React, { useState } from 'react';
// import './Services.css'; // Import external CSS file

const ServicesData = [
  {
    img: '/assets/Icons/Neurology.png',
    title: 'Neurology',
    id: 'neurology',
    heading: 'Neurology Department',
    texts: [
      'Expert neurological consultations',
      'Comprehensive brain and nerve care',
      'Advanced neuroimaging services',
      'Treatment for epilepsy and seizures',
      'Memory and cognitive assessments',
      'Pediatric neurology expertise',
      'Movement disorders management',
    ],
  },
  {
    img: '/assets/Icons/Cardiology.png',
    title: 'Cardiology',
    id: 'cardiology',
    heading: 'Cardiology Department',
    texts: [
      'Electrocardiogram (ECG)',
      'Echocardiogram',
      'Color Doppler Echo',
      'Dobutamine Stress Echo (DSE)',
      'Transesophageal Echo (TEE)',
      'Exercise Tolerance Test (ETT/TMT)',
      'Halter monitor',
      '24 Hour Ambulatory BP monitor',
      'Tilt Test/Tilt Table Test',
    ],
  },
  {
    img: '/assets/Icons/Orthopoedics.png',
    title: 'Orthopedics',
    id: 'orthopedics',
    heading: 'Orthopedics Department',
    texts: [
      'Orthopedic surgery and joint replacements',
      'Sports injury and trauma care',
      'Physical therapy and rehabilitation',
      'Spine and back pain solutions',
      'Arthritis and joint disorder treatment',
      'Orthopedic consultations',
      'Customized orthopedic care plans',
    ],
  },
  {
    img: '/assets/Icons/Surgery.png',
    title: 'Surgery',
    id: 'surgery',
    heading: 'Surgery Department',
    texts: [
      'Minimally invasive and laparoscopic surgery',
      'Gastrointestinal surgery and endoscopy',
      'Plastic and reconstructive surgery',
      'Cancer and tumor resection',
      'Post-operative care and recovery',
      'Surgical consultations',
      'Emergency surgical interventions',
    ],
  },
  {
    img: '/assets/Icons/Dentistry.png',
    title: 'Dentistry',
    id: 'dentistry',
    heading: 'Dentistry Department',
    texts: [
      'Routine dental check-ups and cleanings',
      'Cosmetic dentistry and teeth whitening',
      'Oral surgery and extractions',
      'Dental implants and restorations',
      'Pediatric and family dentistry',
      'Gum disease treatment',
      'Orthodontic and braces options',
    ],
  },
  {
    img: '/assets/Icons/Radiology.png',
    title: 'Radiology',
    id: 'radiology',
    heading: 'Radiology Department',
    texts: [
      'Advanced diagnostic imaging services',
      'Mammography and breast health screening',
      'Interventional radiology procedures',
      'Virtual colonoscopy and body scans',
      'Radiology consultations',
      'Fast and accurate imaging results',
      'State-of-the-art radiology technology',
    ],
  },
  {
    img: '/assets/Icons/Urology.png',
    title: 'Urology',
    id: 'urology',
    heading: 'Urology Department',
    texts: [
      'Urinary tract and kidney evaluations',
      'Urologic surgery and stone removal',
      "Men's and women's urological health",
      'Prostate and bladder care',
      'Incontinence and pelvic floor therapy',
      'Urological consultations',
      'Comprehensive urology solutions',
    ],
  },
  {
    img: '/assets/Icons/Medicine.png',
    title: 'Medicine',
    id: 'medicine',
    heading: 'Medicine Department',
    texts: [
      'Primary care and internal medicine',
      'Chronic disease management and prevention',
      'Immunizations and wellness checks',
      'Holistic and integrative medicine',
      'Geriatric and pediatric medicine',
      'Health education and lifestyle coaching',
      'Individualized medical treatment plans',
    ],
  },
  {
    img: '/assets/Icons/seeMoreImage.png',
    title: 'See More',
    id: 'seemore',
    heading: 'Explore Our Services',
    texts: [
      'Explore additional healthcare options',
      'Specialized medical services for all needs',
      'Discover a world of medical solutions',
      'Find the right care for you',
      'Comprehensive healthcare offerings',
      'More than meets the eye',
      'Healthcare beyond expectations',
    ],
  },
];

const Button = ({ children }) => {
  return (
    <button className="appointment-button">{children}</button>
  );
};

const ListItem = ({ text }) => {
  return (
    <li className="service-list-item">
      <span className="service-list-icon">*</span>
      <p>{text}</p>
    </li>
  );
};

const Service = ({ SelectService, setSelectService, service }) => {
  const lowerCaseService = service.title.toLowerCase().replace(/\s+/g, '');

  const isSelected = SelectService === lowerCaseService;

  return (
    <div
      onClick={() => setSelectService(lowerCaseService)}
      className={`service-card ${isSelected ? 'selected' : ''}`}
    >
      <img
        className="service-icon"
        src={service.img}
        alt={service.title}
      />
      <p className="service-title">{service.title}</p>
    </div>
  );
};

const Services = () => {
  const [SelectService, setSelectService] = useState('cardiology');

  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );

  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">Services</h2>
      <div className="services-container">
        <div className="services-grid">
          {ServicesData.map((service, index) => (
            <Service
              key={index}
              service={service}
              SelectService={SelectService}
              setSelectService={setSelectService}
            />
          ))}
        </div>
        <div className="service-details">
          <h3 className="service-details-heading">
            {selectedServiceData?.heading}
          </h3>
          <ul className="service-details-list">
            {selectedServiceData?.texts.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>
          <div className="appointment-button-container">
            <Button>Appointment Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
