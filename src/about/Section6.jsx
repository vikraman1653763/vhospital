import React from "react";
import Marquee from "react-fast-marquee";

const Section6 = () => {
  const tieUpList = [
    { name: "Alankit Health Care", logo: "/logos/1.png" },
    { name: "TTK Health Care", logo: "/logos/2.png" },
    { name: "Subclavian Catheterization", logo: "/logos/3.png" },
    { name: "Paramount Health Care", logo: "/logos/4.png" },
    { name: "Family Health Care", logo: "/logos/5.png" },
    { name: "East West Assist", logo: "/logos/6.png" },
    { name: "MedSave", logo: "/logos/7.png" },
    { name: "Genins", logo: "/logos/8.png" },
    { name: "Good Health Plan", logo: "/logos/9.png" },
    { name: "Heritage India", logo: "/logos/10.png" },
    { name: "MD India", logo: "/logos/11.png" },
    { name: "Medi Assist", logo: "/logos/12.png" },
    { name: "Raksha TPA", logo: "/logos/13.png" },
    { name: "Vipul Medi Corp", logo: "/logos/14.png" },
    { name: "Park Medi Corp", logo: "/logos/15.png" },
    { name: "Safeway Mediclaim", logo: "/logos/16.png" },
    { name: "Dedicated Health Care", logo: "/logos/17.png" },
    { name: "Medicare TPA", logo: "/logos/18.png" },
    { name: "Cholamandalam", logo: "/logos/19.png" },
    { name: "E-Meditek", logo: "/logos/20.png" },
    { name: "United India Insurance", logo: "/logos/21.png" },
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
