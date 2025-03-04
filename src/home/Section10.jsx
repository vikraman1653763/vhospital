import React, { useState } from 'react';
import { FaAmbulance, FaHeartbeat, FaXRay, FaStethoscope } from 'react-icons/fa';
import { GiFruitBowl, GiSiren, GiLoveInjection, GiHeartBeats } from 'react-icons/gi';
import { MdScience } from 'react-icons/md';
import { FaBedPulse, FaUserDoctor  } from "react-icons/fa6";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

const ServicesData = [
  {
    icon: <FaAmbulance />,
    title: 'Ambulance',
    id: 'ambulance',
    heading: 'Ambulance',
    texts: [
      "24/7 Emergency Services",
      "Advanced Life Support Equipment",
      "Continuous Oxygen Supply",
      "Expert Medical Team",
      "Patient Transfers",
      "Event Coverage & First Aid Support",
      "Comfortable & Fully Air-Conditioned Ambulance",
      "Defibrillators & Ventilators Onboard",
      "Infusion Pumps for Critical Care",
      "Rapid Response for Emergencies"
    ],
  },
  {
    icon: <GiFruitBowl />,
    title: 'Dietary',
    id: 'dietary',
    heading: 'Dietary',
    texts: [
      "Expert Dietitians",
      "Personalized Meal Plans",
      "Nutritional Counseling",
      "Therapeutic Diets",
      "Post-Surgical Nutrition",
      "Weight Management Programs",
      "Parenteral and Enteral Nutrition",
      "Immune-Boosting Diets",
      "Metabolic Health Support",
      "Pediatric and Prenatal Nutrition"
    ],
  },
  {
    icon: <GiSiren />,
    title: 'Emergency',
    id: 'emergency',
    heading: 'Emergency and Trauma',
    texts: [
      "24/7 Emergency & Trauma Care",
      "Advanced Life Support Systems",
      "Expert Trauma Specialists",
      "Rapid Response Team",
      "Polytrauma & Mass Trauma Management",
      "Cardiac & Poisoning Emergencies",
      "Dedicated Emergency Ward",
      "Systematic Assessment & Rapid Mobilization",
      "Skilled Medical Officers & Nurses",
      "Comprehensive Critical Care Support"
    ],
  },
  {
    icon: <GiLoveInjection />,
    title: 'Health Checkups',
    id: 'healthcheckups',
    heading: 'Health Checkups',
    texts: [
      "BASIC HEALTH CHECKUP - Rs. 1,040/-",
      "MASTER HEALTH CHECKUP - Rs. 2,500/-",
      "EXECUTIVE MASTER HEALTH CHECKUP - Rs. 5,500/-",
      "EXECUTIVE HEART CHECKUP - Rs. 4,500/-",
      "WELL WOMEN HEALTH CHECKUP - Rs. 1,900/-",
      "DIABETIC HEALTH CHECKUP - Rs. 1,000/-",
      "BASIC CHILD HEALTH CHECKUP (5 years & above) - Rs. 1,100/-",
   
    ],
  },
  {
    icon: <FaXRay />,
    title: 'Imaging',
    id: 'imaging',
    heading: 'Imaging',
    texts: [
      "Advanced Imaging Technology",
      "Comprehensive Imaging Services",
      "X-rays & Radiography",
      "Ultrasound & Echocardiography",
      "CT Scans & Angiography",
      "Mammography & Obstetric Scanning",
      "Vascular Doppler Studies",
      "Emergency Imaging Support",
      "Collaborations with Leading Scan Centers",
      "Personalized Care with Precision Diagnosis"
    ],
  },
  {
    icon: <GiHeartBeats />,
    title: 'ICU',
    id: 'icu',
    heading: 'Intensive Care Unit',
    texts: [
      "9-Bedded Closed ICU",
      "24/7 Intensivist Monitoring",
      "1:1 Nurse-Patient Ratio",
      "Advanced Multi-Parameter Monitoring",
      "Ventilator Support & Defibrillators",
      "Bedside Imaging - X-ray, USG, 2-D Echo",
      "Specialized Procedures & Post-Operative Care",
      "Sterile Environment & Infection Control",
      "Nutritional Support & Parenteral Feeding",
      "Evidence-Based Treatment Protocols"
    ],
  },
  {
    icon: <MdScience />,
    title: 'Laboratory',
    id: 'laboratory',
    heading: 'Laboratory',
    texts: [
      "Comprehensive diagnostic testing",
      "Expert specimen interpretation",
      "In-house access to resources",
      "Collaboration for better care",
      "Efficient laboratory operations",
      "Services for all patient types",
      "Compassionate patient care",
      "Specialized testing for long-term care",
      "Routine testing with collection support",
      "Quality Assurance for reliable results"
    ],
  },
  {
    icon: <FaBedPulse />,
    title: 'Operation Theatre',
    id: 'operationtheatre',
    heading: 'Operation Theatre',
    texts: [
      "3 Operation Theatres for different procedures",
      "Orthopaedic, Neurological, Cardiothoracic, Plastic, Ophthalmological",
      "Laparoscopic, General, OBG, Gastroenterological",
      "Endoscopic, Minor surgeries",
      "0.3-micron filter with laminar airflow",
      "Equipped with Harmonic Scalpel, C-Arm, Anaesthesia Ventilator",
      "Laparoscopy Instruments, Diathermy, Surgical tools",
      "Round-the-clock operations with power backup",
      "Strict bio-medical waste segregation",
      "Efficient waste disposal system"
    ],
  },
  {
    icon: <FaStethoscope />,
    title: 'Physiotherapy',
    id: 'physiotherapy',
    heading: 'Physiotherapy and Rehabilitation',
    texts: [
      "Pain reduction and rehabilitation",
      "Orthopaedic, Neurological, Cardiopulmonary care",
      "Efficient team for assessment and treatment",
      "Equipped with latest physiotherapy tools",
      "Musculoskeletal pain relief",
      "Orthopaedic trauma rehabilitation",
      "Post-operative pain management",
      "Ambulation, mobilisation, stroke rehab",
      "Chest physiotherapy, ICU care",
      "Modalities: Diathermy, Ultrasound, IFT, TENS, etc.",
      "Manipulative Physiotherapy, Soft Tissue Mobilisation"
    ],
  },
];

const Button = ({ children, onClick }) => {
  return <button className="appointment-button" onClick={onClick}>{children}</button>;
};

const ListItem = ({ text }) => {
  return (
    <li className="service-list-item">
      <span className="service-list-icon"><LiaStethoscopeSolid /></span>
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
      <div className="service-icon">{service.icon}</div>
      <p className="service-title">{service.title}</p>
    </div>
  );
};

const Services = () => {
  const [SelectService, setSelectService] = useState('ambulance');
  const navigate = useNavigate(); // For redirection

  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );


  // Map Service ID to Section IDs
  const serviceToSectionMap = {
    ambulance: 'ambulance',
    dietary: 'diet',
    emergency: 'emergency',
    healthcheckups: 'health',
    imaging: 'image',
    icu: 'icu',
    laboratory: 'lab',
    operationtheatre: 'operation',
    physiotherapy: 'physio',
  };

  // Handle "Know More" Button Click
  const handleKnowMoreClick = () => {
    const sectionId = serviceToSectionMap[SelectService]; // Map selected service ID
  
    // Redirect to service page with hash
    navigate(`/service#${sectionId}`);
  };
  
  
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
          <h3 className="service-details-heading">{selectedServiceData?.heading}</h3>
          <ul className="service-details-list">
            {selectedServiceData?.texts.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>
          <div className="appointment-button-container">
            <Button onClick={handleKnowMoreClick}>Know More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
