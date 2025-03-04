import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoPersonCircle } from "react-icons/io5";
import '../style/career.css';

const jobOpenings = [
    { title: 'Insurance Executive', description: 'Manage insurance claims and policies for patients efficiently.' },
    { title: 'Accounts Executive', description: 'Handle financial transactions, invoices, and billing operations.' },
    { title: 'Pharmacist', description: 'Dispense medications and counsel patients on proper drug usage.' },
    { title: 'Male Staff Nurse', description: 'Provide quality nursing care and assist in patient recovery.' },
    { title: 'Staff Nurse - Labour Room', description: 'Assist in labor and delivery, ensuring mother and child care.' },
    { title: 'ICU Incharge', description: 'Oversee ICU operations and ensure critical patient care.' }
];

const CareerSection = () => {
    return (
        <section className="job-section">
            <h3 className="job-title">Current Openings</h3>
            <div className="job-list">
                {jobOpenings.map((job, index) => (
                    <div className="job-card" data-aos="fade-up" key={index}>
                        <div className="job-img-container">
                            <IoPersonCircle className='job-img' />
                        </div>
                        <div className="job-info">
                            <h4 className="job-name">{job.title}</h4>
                            <p className="job-description">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerSection;
