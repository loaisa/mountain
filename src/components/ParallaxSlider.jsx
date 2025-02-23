import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ParallaxSlider.css'; // Подключаем стили
import imageOne from './1.png'
import imageTwo from './2.jpg'
import imageThree from './3.jpg'
const ParallaxSlider = ({offset}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        {
            image: imageOne, // Замените на путь к вашему изображению
            title: 'Slide 1',
            description: 'This is the first slide with a parallax effect.',
        },
        {
            image: imageTwo, // Замените на путь к вашему изображению
            title: 'Slide 2',
            description: 'This is the second slide with a parallax effect.',
        },
        {
            image: imageThree, // Замените на путь к вашему изображению
            title: 'Slide 3',
            description: 'This is the third slide with a parallax effect.',
        },
    ];

    return (
        <div className="parallax-slider-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="slide-background"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                transform: `translateY(${offset * .5}px)`,
                            }}
                        ></div>
                        <div className="slide-content">
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ParallaxSlider;