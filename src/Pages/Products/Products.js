import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from './Product';
import { useQuery } from '@tanstack/react-query';
import logo from "../../assets/Perfect DEAl.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import './product.css'
import BookingModal from '../BookingModal/BookingModal';
const Products = () => {
    const [bookProduct,setBookProduct]=useState(null);
    const products = useLoaderData();
    const { data: productCategorys = [], isLoading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = fetch('http://localhost:5000/productCategorys');
            const data = (await res).json();
            return data;
        }
    });
    console.log(productCategorys);
    return (
        <div className='flex '>
            <div className='bg-zinc-200 p-2 lg:block hidden'>
               
                <h1 className='text-xl mt-4 font-bold '>Product Category</h1>
                {
                    productCategorys.map(productCategory => <>
                       <ul className='flex items-center ml-3 mt-5 productUl'>
                        <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>
                           <Link to={`/products/${productCategory.category_id}`}> <li className='p-[10px] text-sm font-bold'>{productCategory.category_name}</li> </Link>
                       </ul>
                    </>)
                }
            </div>
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
            ></BookingModal>}
        </div>
    );
};

export default Products;