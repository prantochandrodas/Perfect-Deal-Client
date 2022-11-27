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
            <SocilMedia></SocilMedia>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;