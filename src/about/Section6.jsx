import React from "react";
import Marquee from "react-fast-marquee";

const Section6 = () => {
  const tieUpList = [
    { name: "Alankit Health Care", logo: "/logos/alankit.webp"},
    { name: "TTK Health Care", logo: "/logos/ttk.webp"},
    { name: "Subclavian Catheterization", logo: "/logos/subclavian.webp"},
    { name: "Paramount Health Care", logo: "/logos/paramount.webp"},
    { name: "Family Health Care", logo: "/logos/fhc.webp"},
    { name: "East West Assist", logo: "/logos/ewa.webp"},
    { name: "MedSave", logo: "/logos/medsave.webp"},
    { name: "Genins", logo: "/logos/genins.webp"},
    { name: "Good Health Plan", logo: "/logos/goodhealth.webp"},
    { name: "Heritage India", logo: "/logos/heritage.webp"},
    { name: "MD India", logo: "/logos/md.webp"},
    { name: "Medi Assist", logo: "/logos/medi.webp"},
    { name: "Raksha TPA", logo: "/logos/raksha.webp"},
    { name: "Vipul Medi Corp", logo: "/logos/vipul.webp"},
    { name: "Park Medi Corp", logo: "/logos/park.webp"},
    { name: "Safeway Mediclaim", logo: "/logos/safeway.webp"},
    { name: "Dedicated Health Care", logo: "/logos/dhs.webp"},
    { name: "Medicare TPA", logo: "/logos/medicare.webp"},
    { name: "Cholamandalam", logo: "/logos/chola.webp"},
    { name: "E-Meditek", logo: "/logos/emedi.webp"},
    { name: "United India Insurance", logo: "/logos/united.webp"},
  ];

  return (
    <section className="tie-ups-container">
      <div className="tie-ups-content">
        <h2 className="tie-ups-title">TIE-UPS</h2>
        <p className="tie-ups-description">
          We have established strategic tie-ups with leading insurance companies and corporates to support our patients by facilitating cashless medical facilities. Our extensive network ensures that you receive high-quality care without the hassle of upfront payments.
        </p>
        <div className="tie-ups-list">
          <Marquee autoFill={true} pauseOnHover={true} speed={30} gradient={true} gradientColor={[248, 248, 248]}>
            {tieUpList.map((item, index) => (
              <div key={index} className="tie-up-item">
                <img src={item.logo} alt={item.name} className="tie-up-logo" />
                <span>
                  {item.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Section6;
