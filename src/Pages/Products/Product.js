import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faF, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
const Product = ({ product ,setBookProduct}) => {


    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers', {
                headers: {
                    authorization: `bearar ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

console.log(allSellers);


    const {
        location,
        condition,
        original_price,
        picture,
        product_name,
        resale_price,
        saller_name,
        verified,
        year_of_use,
        email


    } = product;
 
    return (
        <div>
            <div className="card lg:w-[350px]   md:mx-auto  shadow-xl">
                <div>
                    <h2 className='text-3xl my-4 text-center'>{product_name}</h2>
                </div>
                <figure><img src={picture} alt="Shoes" className='md:h-[300px] h-[250px] lg:h-[300px] p-3' /></figure>
                <div className="card-body">
                    <div className='flex items-center'>
                        <h2 className="card-title mr-2 " >Seller: {saller_name}</h2>
                        {
                            allSellers.map(allSeller=>
                                allSeller?.email===email && allSeller?.verified === "verified" ?
                            <div>
                                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                            </div> :
                            <div>

                            </div>)
                            
                       
                        }
                    </div>
                    <p className='font-bold'>Location: <small>{location}</small></p>
                    <p className='font-bold'>Resale Price:${resale_price} / Original Price:{original_price}</p>
                    <p className='font-bold'>Year of use : {year_of_use}</p>
                    <p className='font-bold'>Condition : {condition}</p>

                    <div className="card-actions justify-end">
                
                        <label  htmlFor="booking-modal" onClick={()=>setBookProduct(product)}  className="btn btn-primary">Book Product</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;