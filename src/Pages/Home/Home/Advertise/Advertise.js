import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './Advertise.css';
import Slider from "react-slick";

const Advertise = ({ product }) => {
    
    const { paid, product_name, picture, resale_price, condition, posted_date } = product;
    //  console.log(product);

    return (
        <div>

            {product?.paid && product.paid === true ?
                <div className='hidden'>
                    No product found
                </div>
                :
                <a href="#" class="group bg-black rounded-xl relative block lg:w-[300px] w-[220px] h-[250px]">
                    <img
                        alt="Developer"
                        src={picture}
                        class="absolute rounded-xl h-full inset-0 h-full w-full object-cover opacity-75 transition-opacity"
                    />

                    <div class="relative p-4 sm:p-6 lg:p-8">
                        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                            {product_name}
                        </p>

                        <p class="text-xl font-bold text-white sm:text-2xl">price :{resale_price} </p>

                        <div class="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p class="text-xl  text-white sm:text-lg">price :{condition} </p>
                                <p class="text-xl  text-white sm:text-lg">price :{posted_date} </p>
                            </div>
                        </div>
                    </div>
                </a>
            }

        </div>
    );
};

export default Advertise;