import React from 'react';
import AboutUs from '../../AoutUs/AboutUs';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategory from '../HomeCategory/HomeCategory';
import SocilMedia from './SocialMedia/SocilMedia';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory></HomeCategory>
            <AboutUs></AboutUs>
            <SocilMedia></SocilMedia>
        </div>
    );
};

export default Home;