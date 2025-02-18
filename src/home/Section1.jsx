import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Section1 = () => {
    
    const cards = [
        {
          image: "/assets/banner1.webp",
        },
        {
          image: "/assets/banner2.webp",
        },
        {
          image: "/assets/banner3.webp",
        },
    ];
    
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            transitionTime={10}  
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
