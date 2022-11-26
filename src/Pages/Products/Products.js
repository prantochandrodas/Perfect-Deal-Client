import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from './Product';
import { useQuery } from '@tanstack/react-query';
import './product.css'
import BookingModal from '../BookingModal/BookingModal';
import ProductCategoryDrawer from './ProductCategoryDrawer';
const Products = () => {
    const [bookProduct,setBookProduct]=useState(null);
    const products = useLoaderData();
 
    return (
        // bg-zinc-200 p-2
        <div className='flex '>
                <ProductCategoryDrawer></ProductCategoryDrawer>
            <div className='grid lg:grid-cols-2 p-5 md:grid-cols-2 gap-5 lg:p-20 md:p-10 '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setBookProduct={setBookProduct}
                    ></Product>)
                }
            </div>
           {bookProduct &&
            <BookingModal
            bookProduct={bookProduct}
            setBookProduct={setBookProduct}
            ></BookingModal>}
        </div>
    );
};

export default Products;