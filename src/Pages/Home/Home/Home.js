import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Spinner from '../../../Spinner/Spinner';
import AboutUs from '../../AoutUs/AboutUs';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategory from '../HomeCategory/HomeCategory';
import Advertise from './Advertise/Advertise';
import SocilMedia from './SocialMedia/SocilMedia';
import Contact from '../../Contact/Contact';
import Slider from 'react-slick';
import { AuthContext } from '../../../contexts/AuthProvider';


const Home = () => {
  const { user } = useContext(AuthContext);
 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",background:'gray',color:'#000000!important'  }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow:<SampleNextArrow></SampleNextArrow>,
    prevArrow:<SamplePrevArrow></SamplePrevArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`https://perfect-deal-server.vercel.app/allProduct/advetrise`, {

      });
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Spinner></Spinner>
  }
  // console.log(products);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeCategory></HomeCategory>
      <div>
        <h1 className='text-4xl text-center text-black'>Advertisment</h1>
        <div className='lg:p-20 p-2 w-[90%] mx-auto lg:w-full'>
          <Slider {...settings}>
            {
              products && products.map(product => <Advertise
                key={product._id}
                product={product}
              ></Advertise>)
            }
          </Slider>
        </div>
      </div>
    
      <Contact></Contact> 
    </div>
  );
};

export default Home;