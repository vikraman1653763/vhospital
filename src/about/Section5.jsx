import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiHeartPlus } from "react-icons/gi";

const Section5 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); 
  }, []);

  return (
    <section className="ins-sec-5">
      <div className="ins-sec-5-content">
        <div className="ins-sec-5-text">
          <h2 className="ins-sec-5-title">INSURANCE SERVICES</h2>
          <p className="ins-sec-5-description">
            We understand the importance of seamless healthcare services, especially during medical emergencies. To ensure that our patients have access to cashless medical facilities, we have partnered with several leading insurance companies and Third-Party Administrators (TPAs). Our network helps streamline the claims process, making it easier for you to receive timely medical care.
          </p>
        </div>
        <div className="ins-sec-5-points">
          <div className="ins-sec-5-point">
            <h3>List of TPAs We Partner With:</h3>
            <div className='ins-pt-container'>

            <ul data-aos="fade-up">
              <li><FaHandHoldingHeart /> TTK Healthcare TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Medi Assist India Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Raksha Health Insurance TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> United Healthcare Parekh Insurance TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Vipul Medcorp Insurance TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Good Health Insurance TPA Ltd.</li>
              <li><FaHandHoldingHeart /> MD India Healthcare Insurance TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> MedSave Health Insurance TPA Ltd.</li>
              <li><FaHandHoldingHeart /> Family Health Plan TPA Ltd.</li>
              </ul>
              <ul data-aos="fade-up">
              <li><FaHandHoldingHeart /> E-Meditek (TPA) Services Ltd.</li>
              <li><FaHandHoldingHeart /> Paramount Health Services & Insurance TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Medicare TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Gennis India TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Park Mediclaim Consultant Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Alankit Healthcare TPA Ltd.</li>
              <li><FaHandHoldingHeart /> Health India TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Safeway TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> East West Assist TPA Pvt. Ltd.</li>
              <li><FaHandHoldingHeart /> Sri Gokulam Health Services TPA (P) Ltd.</li>
            </ul>
            </div>
          </div>
          <div className="ins-sec-5-point ins-point-2">
            <h3>List of Insurance Companies:</h3>
            <ul data-aos="fade-up">
              <li><GiHeartPlus /> Star Health and Allied Insurance</li>
              <li><GiHeartPlus /> Future Generali Insurance</li>
              <li><GiHeartPlus /> Chola MS General Insurance</li>
              <li><GiHeartPlus /> IFFCO-Tokio General Insurance</li>
              <li><GiHeartPlus /> HDFC ERGO General Insurance Company Ltd.</li>
              <li><GiHeartPlus /> Religare Health Insurance Company Ltd.</li>
              <li><GiHeartPlus /> Apollo Munich</li>
              <li><GiHeartPlus /> Bajaj Allianz</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
