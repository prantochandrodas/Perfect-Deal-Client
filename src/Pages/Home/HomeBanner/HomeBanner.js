import React, { useEffect } from 'react';
import banner from '../../../assets/Prefect Deal (1).png'
import banner2 from '../../../assets/How To.png'
import banner3 from '../../../assets/Prefect Deal.png'
import bannerImage from '../../../assets/abstract-backgrounds-minimalistic-website-wallpaper-preview.jpg'
import bannerImage1 from '../../../assets/Mobile-Mock-Academy.png'
import './HomeBanner.css';
import mobile from '../../../lf20_mqoebcen.json';

import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mobile,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };
    return (

        <div className='bg-Color'>
            <section>
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-center overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className="text-4xl text-color font-extrabold md:text-5xl">
                            We help our customer to gets and best offer Price
                        </h2>
                        <p className='text-color2'>
                            get ready for get the best offer in time .Don't missout the best deal.We are providing you best condition phone in best price.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link to="/allProduct" className="flex items-center justify-center gap-x-2 py-2 px-4 text-color hover:text-gray-500 font-medium duration-150 active:text-color2 border-color rounded-lg md:inline-flex">
                                let shop
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <div>
                            <Lottie options={defaultOptions}
                                height={400}
                                width={400} />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default HomeBanner;