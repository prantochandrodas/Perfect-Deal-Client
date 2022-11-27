import React from 'react';
import './About.css';
import banner from '../../assets/Learn.png'
const AboutUs = () => {
    return (
        <div>
            <img src={banner} className="lg:h-[600px] lg:w-full h-full" alt="" />
        </div>
    );
};

export default AboutUs;