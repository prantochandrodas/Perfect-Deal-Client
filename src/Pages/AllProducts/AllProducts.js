import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';
import BookingModal from '../BookingModal/BookingModal';

const AllProducts = () => {
    const [bookProduct, setBookProduct] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const [allProduct, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
   
    const newpages = Math.ceil(allProduct.count / size);
    console.log(newpages);
    
   

    useEffect(() => {
        setLoading(true);
        fetch(`https://perfect-deal-server.vercel.app/allProduct?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(result => {
                setDatas(result)
                setLoading(false);
            })
    }, [page,size]);
    console.log(allProduct.retult);
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-10 p-2 md:p-10'>
                {
                    allProduct?.result?.map(data => <AllProduct
                        key={data._id}
                        data={data}
                        setBookProduct={setBookProduct}
                    ></AllProduct>)
                }
            </div>
            <div className='w-[90%] mx-auto my-4'>
                <p className='font-bold text-xl'>Current Selected Page : {page}</p>
                {
                    newpages >= 0 ? [...Array(newpages).keys()]?.map(number => <div className="btn-group">
                        <button key={number} className={page === number ? ' btn btn-active mx-2' : 'btn mx-2'} onClick={() => setPage(number)}>{number}</button>
                    </div>) :
                        <></>
                }
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

export default AllProducts;