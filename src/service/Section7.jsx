import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiPolarStar } from "react-icons/gi";

const Section7 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); 
  }, []);

  return (
    <section className="service-sec-7" id='icu'>
      <div className="service-sec-7-content">
        <div className="service-sec-7-text">
          <h2 className="service-sec-7-title">INTENSIVE CARE UNIT</h2>
          <p className="service-sec-7-description">
  Venkataeswara Hospitals has a multi-bedded closed ICU. We follow certain cardinal principles to ensure hygiene and comprehensive care within the ICU.Every bed in the ICU is equipped with state-of-the-art multi-parameter monitors, ventilators, bedside diagnostic equipment, and life-saving devices. Our ICU is managed by intensivists around the clock, and we maintain a high Nurse:Patient ratio to provide the best care.
            </p>

        </div>
        <div className="service-sec-7-points"  >
        <div className="service-sec-7-point" >
          <h3>Procedures :</h3>
          <ul >
            <li><GiPolarStar/>Internal jugular vein ventilatory support</li>
            <li><GiPolarStar/>External jugular vein ventilatory support</li>
            <li><GiPolarStar/>Subclavian catheterisation</li>
            <li><GiPolarStar/>Arterial catheterisation (radial and femoral)</li>
            <li><GiPolarStar/>Thrombolysis</li>
            <li><GiPolarStar/>Endoscopy and Colonoscopy</li>
            <li><GiPolarStar/>Post-operative care</li>
            <li><GiPolarStar/>Tracheostomy</li>
            <li><GiPolarStar/>Pericardiocentesis</li>
            <li><GiPolarStar/>Pleurocentesis</li>
            <li><GiPolarStar/>Pleurodesis</li>
            <li><GiPolarStar/>Haemodialysis and Peritoneal dialysis</li>
            <li><GiPolarStar/>Suprapubic cystostomy</li>
          </ul>
          </div>
          <div className="service-sec-7-point" >

          <h3>Cardinal Principles:</h3>
          <ul>
            <li><GiPolarStar/>Maintaining sterility</li>
            <li><GiPolarStar/>Management of Deep Venous Thrombosis</li>
            <li><GiPolarStar/>Management of Hypothermia or Hyperthermia</li>
            <li><GiPolarStar/>Management of Hypoventilation or Hyperventilation</li>
            <li><GiPolarStar/>Nutrition and Dietitics</li>
            <li><GiPolarStar/>External and parenteral feeding</li>
            <li><GiPolarStar/>Supplementing minerals, vitamins, micro and macronutrients</li>
            <li><GiPolarStar/>Management of Hypoglycaemia or Hyperglycaemia</li>
            <li><GiPolarStar/>Protection from VAP</li>
            <li><GiPolarStar/>Following evidence-based practice</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
