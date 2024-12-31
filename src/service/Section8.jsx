import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdMedicalServices } from 'react-icons/md';
import { FaTruck, FaTasks, FaStethoscope, FaCheckCircle } from 'react-icons/fa';
import { MdScience } from 'react-icons/md';

const Section8 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="service-sec-8">
      <div className="service-sec-8-content">
        <div className="service-sec-8-text"  >
          <h2 className="service-sec-8-title">LABORATORY SERVICES</h2>
          <p className="service-sec-8-description"  >
            The Venkataeswara Hospitals laboratory plays an essential role in the quality and safety of patient care by providing accurate diagnostic and treatment information to caregivers and patients.
          </p>
          <p className="service-sec-8-description" >
            Our laboratory is a comprehensive provider of lab testing, expert medical interpretation of specimens, and continuous innovation in laboratory technology. The laboratory collaborates with the various Departments of the Hospital, as well as other hospitals, to enhance patient care through efficient and effective laboratory operations.
          </p>
          <p className="service-sec-8-description">
            Backed by a team of experts in each laboratory discipline, our Hospital Services Team has immediate and in-house access to broad-based resources. We provide comprehensive testing and diagnostic services.
          </p>

          <div className="service-sec-8-points">
            <ul>
              <li className='service-sec-8-point' data-aos="slide-left" data-aos-delay="100"><MdMedicalServices /> Full range of routine testing for hospitals</li>
              <li className='service-sec-8-point' ><FaTruck /> Collection & transportation support</li>
              <li className='service-sec-8-point' data-aos="slide-right" data-aos-delay="100"><FaTasks/> Day-to-day operations management</li>
              <li className='service-sec-8-point' data-aos="slide-left" data-aos-delay="100"><MdScience /> Clinical, Biochemistry, Pathology, and Microbiology services</li>
              <li className='service-sec-8-point' ><FaStethoscope /> Point of Care Testing (POCT)</li>
              <li className='service-sec-8-point' data-aos="slide-right" data-aos-delay="100"><FaCheckCircle /> Quality Assurance Programme</li>
            </ul>
          </div>

          <p className="service-sec-8-description"   data-aos-delay="1000">
            Our laboratory is dedicated to providing services to both inpatients and outpatients, regardless of where their ordering physician is located. We strive to serve patients with compassion, treating them as members of our own family. We specialize in meeting the diagnostic testing needs of outpatients, homebound patients, and those in long-term care facilities, ensuring that clinical tests help diagnose, treat, and support clinical evaluations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section8;
