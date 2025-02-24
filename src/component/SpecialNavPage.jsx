import React from 'react';
import { Link } from 'react-router-dom';
import serviceLinks from '../speciality.json';
import '../style/special-nav.css';
import { LuHeartHandshake } from "react-icons/lu";
const SpecialNavPage = () => {
  return (
    <div className="special-nav-page">
      <h1 className="special-nav-title">Specialities & Consultants</h1>
      <ul className="special-nav-list">
        {serviceLinks.map((speciality) => (
          <li key={speciality.id} className="special-nav-item">
            <Link 
              to={`/speciality/${speciality.id}`} 
              className="special-nav-link"
            >
             <LuHeartHandshake /> {speciality.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialNavPage;
