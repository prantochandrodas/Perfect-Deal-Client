import React from 'react';
import './About.css';
import banner from '../../assets/Learn.png'
const AboutUs = () => {
    return (

        <div className="bg-stone-300 mt-52">
            <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center'>
                <div className=''>
                    <img src={banner}  className="lg:ml-10 lg:h-[450px] -mt-32 lg:w-[500px]   lg:mr-10" alt="" />
                </div>
                <div className='lg:w-[500px] w-[90%] mx-auto my-5'>
                    <h2 className="text-3xl font-bold text-white md:my-4">About Us </h2>
                    <p className="text-xl text-white md:my-4">Our company is trying to provide best condition product . Get your best product from our website.We are the most trusted site where you can buy your product.</p>
                </div>
            </div>
        </div>


    );
};

export default AboutUs;