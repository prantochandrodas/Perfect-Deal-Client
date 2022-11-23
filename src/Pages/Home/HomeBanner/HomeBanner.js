import React from 'react';
import banner from '../../../assets/banner.png'
const HomeBanner = () => {
    return (
        <div className="hero lg:w-[95%] mx-auto my-4">
            <div className="hero-content lg:flex-row-reverse w-full">
                <div className='sm:w-[75%] '>
                    <img alt='' src="https://img.freepik.com/free-psd/website-template-laptop-screen_53876-57297.jpg?w=2000" className='sm:w-full lg:w-[900px] mx-auto rounded'  />
                

                </div>
                <div className='w-full'>
                    <h1 className="text-4xl font-bold " >Get the Best deal for yourself .</h1>
                    <p className='text-xl mt-3 sm-text-center'>We sell best Condition laptops. We will provide the best service. Customer satisfaction is our main priority.Get the best deal from us. Thank you for visiting our website</p>


                </div>
            </div>
        </div>
    );
};

export default HomeBanner;