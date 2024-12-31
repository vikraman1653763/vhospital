import React, { useEffect, useState } from 'react';
import '../style/special-template.css';

const SpecialityPage = ({ data }) => {
  const [validData, setValidData] = useState(null);

  useEffect(() => {
    if (data) {
      setValidData(data);
    } else {
      console.error('Invalid data format: expected an object.');
    }
  }, [data]);

  return (
    <div className="special-container">
      {validData ? (
        <div className="special-page">
          {/* Title */}
          <h1 className="special-title">{validData.title}</h1>

          {/* First Section */}
          <div className="special-section">
            <div className="special-text">{validData.description1}</div>
            <div className="special-image">
              <img src={validData.image} alt={validData.title} />
            </div>
          </div>

          {/* Second Section */}
          <div className="special-section">
            <div className="special-logo">
            <img src={validData.logo}alt={validData.title} />
            </div>
            <div className="special-text-2">{validData.description2}</div>
          </div>

          {/* Third Section */}
          <div className="special-section">
          <div className="special-text">{validData.description3}</div>
          </div>
        </div>
      ) : (
        <p>No data available to display.</p>
      )}
    </div>
  );
};

export default SpecialityPage;
