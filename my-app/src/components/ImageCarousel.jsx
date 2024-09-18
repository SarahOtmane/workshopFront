import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/frontoffice/ImageCarousel.css';

// Importer les images
import img1 from '../assets/swipe1.png';
import img2 from '../assets/swipe2.jpg';
import img3 from '../assets/swipe3.jpg';

const ImageCarousel = () => {
    // Paramètres du carrousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                
                <div>
                    <img src={img2} alt="Image 2" className="carousel-image image-medium" />
                </div>
                <div>
                    <img src={img3} alt="Image 3" className="carousel-image image-small" />
                </div>
            </Slider>
        </div>
    );
};

export default ImageCarousel;
