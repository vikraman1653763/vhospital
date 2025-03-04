import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Section1 = () => {
    
    const cards = [
        { image: "/assets/hosp/vh09.webp" },
        { image: "/assets/hosp/vh08.webp" },
        { image: "/assets/hosp/vh07.webp" },
    ];
    
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            interval={2000}  // Adjust timing
            infiniteLoop={true}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            transitionTime={1000}  // Smooth transition
            animationHandler="fade"  // Enable fade effect
            useKeyboardArrows={false}  // Prevent slide effect
        >
            {cards.map((card, index) => (
                <div key={index} className="carousel-card">
                    <img src={card.image} alt={`Banner ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default Section1;
