import React, {useCallback, useEffect, useState} from 'react';
import '../styles/Parallax.css';


const Parallax = () => {
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

    return (
        <section id='Main' className="parallax-container">
            <div className='parallax-header' style={{transform: `translateY(${offset / 2}px)`}}>
                <div className="header__caption">Welcome to Parallax</div>
                <div className="header__title">Great Mountain</div>
            </div>
            <div className='parallax base' style={{transform: `translateY(${offset / 2}px)`}}></div>
            <div className='parallax middle' style={{transform: `translateY(${offset / 2.5}px)`}}></div>
            <div className='parallax front' style={{transform: `translateY(${offset / 8}px)`}}></div>
        </section>
    );
}

export default Parallax;