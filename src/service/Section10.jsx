import React, { useState } from 'react';

const Section10 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexClick = (index) => {
    setActiveIndex(index === activeIndex ? index : index); // Toggle visibility of points
  };

  const sections = [
    {
      title: 'Rehabilitation Areas',
      content: [
        { title: 'Musculoskeletal pain relief', content: 'Effective treatment for relieving musculoskeletal pain using various therapies.' },
        { title: 'Orthopaedic issues or trauma', content: 'Rehabilitation for patients with orthopedic issues or trauma for faster recovery.' },
        { title: 'Post-operative pain relief', content: 'Specialized physiotherapy to reduce post-operative pain and improve mobility.' },
        { title: 'Ambulation & mobilisation', content: 'Focused on improving walking and mobility through targeted physiotherapy exercises.' },
        { title: 'Stroke & paralysis rehabilitation', content: 'Therapies designed to assist in recovery from stroke and paralysis.' },
        { title: 'Chest physiotherapy', content: 'Treatments aimed at improving lung function and easing breathing difficulties.' },
        { title: 'ICU care', content: 'Specialized physiotherapy care for ICU patients to enhance recovery and prevent complications.' }
      ]
    },
    {
      title: 'Equipment & Modalities',
      content: [
        { title: 'Short wave diathermy', content: 'A therapeutic treatment that uses high-frequency electromagnetic waves to generate heat and treat musculoskeletal injuries.' },
        { title: 'Ultrasound therapy', content: 'Uses high-frequency sound waves to promote tissue healing and reduce inflammation.' },
        { title: 'IFT', content: 'Interferential therapy uses medium-frequency currents to reduce pain and promote healing.' },
        { title: 'TENS', content: 'Transcutaneous electrical nerve stimulation is used for pain relief by sending electrical impulses through the skin.' },
        { title: 'Traction', content: 'A method used to relieve pressure on the spine or joints by applying a pulling force.' },
        { title: 'Laser', content: 'Laser therapy is used to reduce pain and inflammation and promote healing in tissues.' },
        { title: 'Paraffin wax therapy', content: 'A form of heat therapy used to relieve pain and improve joint mobility, especially for arthritis patients.' },
        { title: 'Electrical stimulation', content: 'Uses electrical impulses to stimulate muscles and nerves, promoting recovery and pain relief.' },
        { title: 'Palatile stimulation', content: 'A technique that uses electrical impulses to stimulate the palate and improve oral health.' },
        { title: 'Continuous passive motion (CPM)', content: 'A therapy used after surgery to keep joints moving and prevent stiffness.' }
      ]
    },
    {
      title: 'Advanced Treatments',
      content: [
        { title: 'Manipulative physiotherapy', content: 'Hands-on techniques used to treat musculoskeletal pain and dysfunction.' },
        { title: 'Joint mobilisation & manipulation', content: 'Therapies designed to improve joint function and reduce pain by moving joints in specific directions.' },
        { title: 'Soft tissue mobilisation & manipulation', content: 'Techniques used to treat soft tissue injuries and improve muscle function.' },
        { title: 'Cyriax deep friction massage', content: 'A therapeutic massage technique used to treat soft tissue injuries and reduce inflammation.' },
        { title: 'Trigger point therapy', content: 'A technique used to release tight areas in muscles, known as trigger points, that cause pain.' }
      ]
    },
    {
      title: 'Other Services',
      content: [
        { title: 'Fitness consultation', content: 'Expert advice and guidance on physical fitness to help patients achieve their health goals.' },
        { title: 'Ergonomic advice', content: 'Guidance on improving posture and work environment to prevent strain and injury.' },
        { title: 'Orthotics/Splinting', content: 'The use of custom-made devices to support, align, or protect joints and bones.' }
      ]
    }
  ];

  return (
    <section className="service-sec-10" id='physio'>
      <div className="service-sec-10-content">
        <h2 className="service-sec-10-title">PHYSIOTHERAPY & REHABILITATION</h2>
        <p className="service-sec-10-description">
          Physiotherapy plays a vital role in pain reduction and rehabilitation of patients suffering from Orthopaedic, Neurological & Cardiopulmonary diseases, and other impairments. The members of the Physiotherapy team at Venkataeswara Hospitals are highly efficient and dedicated at assessing and treating the patients. The Department is well-equipped, with all the latest modalities to provide the highest standard of treatment in the field.
        </p>

        <div className="service-sec-10-index-list">
          <ul>
            {sections.map((section, index) => (
              <li
                key={index}
                onClick={() => handleIndexClick(index)}
                className={activeIndex === index ? 'service-sec-10-active' : ''}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="service-sec-10-index-content">
          {activeIndex !== null && (
            <div>
              <ul className='service-sec-10-cards'>
                {Array.isArray(sections[activeIndex].content)
                  ? sections[activeIndex].content.map((item, index) => (
                      <li key={index} className='service-sec-10-card' >
                        {item.title ? (
                          <div >
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                          </div>
                        ) : (
                          item
                        )}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section10;
