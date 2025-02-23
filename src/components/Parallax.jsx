import React from 'react';
import './App.css';


const Parallax = ({offset}) => {


    return (
        <div className="parallax-container">
            <div className='parallax-header' style={{transform: `translateY(${offset / 2}px)`}}>
                <div className="header__caption">Welcome to Parallax</div>
                <div className="header__title">Great Mountain</div>
            </div>
            <div className='parallax base' style={{transform: `translateY(${offset / 2}px)`}}></div>
            <div className='parallax middle' style={{transform: `translateY(${offset / 2.5}px)`}}></div>
            <div className='parallax front' style={{transform: `translateY(${offset / 8}px)`}}></div>
        </div>
    );
};

export default Parallax;