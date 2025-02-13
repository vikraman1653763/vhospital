import React from 'react';
import { useNavigate } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { FaHeartbeat, FaUserMd, FaChild, FaBrain, FaStethoscope } from 'react-icons/fa';
import { GiStomach, GiHealthNormal } from 'react-icons/gi';
import { MdOutlineCoronavirus } from 'react-icons/md';
import { BiDna } from 'react-icons/bi';

const specialties = [
  { icon: <GiHealthNormal />, name: 'Dermatology', id: 'dermatology' },
  { icon: <FaBrain />, name: 'Neurology', id: 'neurology' },
  { icon: <FaChild />, name: 'Pediatrics', id: 'paediatrics' },
  { icon: <FaStethoscope />, name: 'Internal Medicine', id: 'general-internal-medicine' },
  { icon: <GiStomach />, name: 'Gastroenterology', id: 'gastroenterology' },
  { icon: <MdOutlineCoronavirus />, name: 'Rheumatology', id: 'rheumatology' },
  { icon: <BiDna />, name: 'Oncology', id: 'medical-oncology' },
  { icon: <FaHeartbeat />, name: 'Cardiology', id: 'cardiology' },
];

function Section4() {

  const navigate = useNavigate();

  // Function to handle navigation to specific category
  const handleNavigate = (id) => {
    navigate(`/speciality/${id}`);
  };

  return (
    <div className='home-sec-4'>
        <div className='home-sec-4-cards'>
        <Marquee autoFill={true} pauseOnHover={true} speed={30} gradient={true} gradientColor="#f8f8f8">
        {specialties.map((specialty, index) => (
          <div
          key={index}
          className='home-sec-4-card'
          onClick={() => handleNavigate(specialty.id)} // Click handler
          style={{ cursor: 'pointer' }}
        >
            <div className='home-sec-4-icon'>{specialty.icon}</div>
            <div className='home-sec-4-name'>{specialty.name}</div>
          </div>
        ))}
      </Marquee>
      </div>
    </div>
  );
}

export default Section4;
