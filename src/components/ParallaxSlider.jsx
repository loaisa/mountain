import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ParallaxSlider.css';
import imageOne from '../assets/1.avif'
import imageTwo from '../assets/2.avif'
import imageThree from '../assets/3.avif'
import LazyLoad from 'react-lazyload';

const ParallaxSlider = () => {

    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        lazyLoad: true,
        pauseOnHover: false

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
        <section id='Slider' className="parallax-slider-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <LazyLoad key={index} height={100} offset={100}>

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

                    </LazyLoad>
                ))}
            </Slider>
        </section>
    );
};

export default ParallaxSlider;