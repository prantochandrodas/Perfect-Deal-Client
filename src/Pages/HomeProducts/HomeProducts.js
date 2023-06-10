import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import HomeProduct from './HomeProduct';
import BookingModal from '../BookingModal/BookingModal';

const HomeProducts = () => {
    const [bookProduct, setBookProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://perfect-deal-server.vercel.app/homeProducts`)
            .then(res => res.json())
            .then(result => {
                setDatas(result)
                setLoading(false);
            })
    }, []);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "gray" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: 'gray', color: '#000000!important' }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
      
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    nextArrow: <SampleNextArrow></SampleNextArrow>,
                    prevArrow: <SamplePrevArrow></SamplePrevArrow>,
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
    return (
        <div className='my-10'>
            <h2 className='text-center text-2xl mb-4 font-semibold'>Products</h2>
            <div className='lg:w-[90%] w-[80%] mx-auto'>
                <Slider {...settings}>
                    {
                        datas?.map(data => <HomeProduct
                            key={data._id}
                            data={data}
                            setBookProduct={setBookProduct}
                        ></HomeProduct>)
                    }
                </Slider>
            </div>
            <div>
                {bookProduct &&
                    <BookingModal
                        bookProduct={bookProduct}
                        setBookProduct={setBookProduct}
                    ></BookingModal>}
            </div>
        </div>
    );
};

export default HomeProducts;