import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllProduct from './AllProduct';
import BookingModal from '../BookingModal/BookingModal';

const AllProducts = () => {
    const [bookProduct, setBookProduct] = useState(null);
    const { data: allProduct = [], isLoading } = useQuery({
        queryKey: ['allProduct'],
        queryFn: async () => {
            const res = await fetch('https://perfect-deal-server.vercel.app/allProduct');
            const data = await res.json();
            return data;
        }
    });
    console.log(allProduct);
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-10 p-2 md:p-10'>
                {
                    allProduct?.map(data => <AllProduct
                        key={data._id}
                        data={data}
                        setBookProduct={setBookProduct}
                    ></AllProduct>)
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