import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spinner from '../../../Spinner/Spinner';
import AboutUs from '../../AoutUs/AboutUs';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategory from '../HomeCategory/HomeCategory';
import Advertise from './Advertise/Advertise';
import SocilMedia from './SocialMedia/SocilMedia';

const Home = () => {
    
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allProduct/advetrise`, {
               
            });
            const data = await res.json();
            return data;
        }
    });
    // console.log(products);
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory></HomeCategory>
            <div>
                <h1 className='text-4xl text-center'>Advertisment</h1>
                <div  className='grid lg:grid-cols-3  gap-20 p-20'>
                    {
                     products &&   products.map(product => <Advertise
                            key={product._id}
                            product={product}
                        ></Advertise>)
                    }
                </div>
            </div>
            <AboutUs></AboutUs>
            <SocilMedia></SocilMedia>
        </div>
    );
};

export default Home;