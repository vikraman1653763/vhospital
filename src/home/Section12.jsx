import React from 'react';
// import './App.css'; // External CSS file

const FeedbackData = {
  heading: 'Patient Feedback',
  feedbacks: [
    {
      img: '/assets/Users/user1.jpg',
      name: 'Ralph Edwards',
      job: 'Businessman',
      desc: 'My experience with this hospital has been great. I highly recommend their services to anyone in need of quality healthcare. They truly prioritize patient care!',
    },
    {
      img: '/assets/Users/user2.jpg',
      name: 'Josh Smith',
      job: 'Engineer',
      desc: 'The healthcare professionals were top-notch. They were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns.',
    },
    {
      img: '/assets/Users/user3.jpg',
      name: 'Eleanor Pena',
      job: 'Teacher',
      desc: "One thing that stood out to me was the efficiency of the service. I didn't have to wait long for my appointment, and the entire process was a hassle-free experience.",
    },
  ],
};

const SectionWrapper = ({ id, children }) => {
  return <section className="review-container" id={id}>{children}</section>;
};

const Review = ({ user, index }) => {
  return (
    <div className={`review-card ${index % 2 !== 0 ? 'review-card--mb' : ''}`}>
      <div className="review-header">
        <img className="review-img" src={user.img} alt={user.name} />
        <div className="review-info">
          <h6 className="review-name">{user.name}</h6>
          <p className="review-job">{user.job}</p>
        </div>
      </div>
      <p className="review-desc">{user.desc}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <SectionWrapper id="reviews">
      <h3 className="reviews-heading">{FeedbackData.heading}</h3>
      <div className="reviews-list">
        {FeedbackData.feedbacks.map((user, index) => (
          <Review key={index} index={index} user={user} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Reviews;
