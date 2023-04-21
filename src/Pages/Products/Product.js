import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faF, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';
const Product = ({ product, setBookProduct }) => {

    const { user } = useContext(AuthContext);
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://perfect-deal-server.vercel.app/allSellers', {
                headers: {
                    authorization: `bearar ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    console.log(product);


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
        email,
        paid


    } = product;


    const handelWishlist = (product) => {
        console.log(product._id);
        const wishList = {
            category_name: '',
            product_id:product._id,
            category_id: product.category_id,
            picture: product.picture,
            product_name: product.product_name,
            saller_name: product.saller_name,
            condition: product.condition,
            location: product.location,
            resale_price: product.resale_price,
            original_price: product.original_price,
            year_of_use: product.year_of_use,
            posted_date: product.posted_date,
            verified: 'verified',
            email: user?.email,
            paid: product.paid
        }
        fetch('https://perfect-deal-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(wishList)

        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Sucess fully Added', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
               if(result===false){
                toast.info('Already Added', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
               }

            })
    }

    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
          {
              <div className="card lg:w-[390px]   md:mx-auto  shadow-xl">
                <div>
                    <h2 className='text-3xl my-4 text-center'>{product_name}</h2>
                </div>
                <figure><img src={picture} alt="Shoes" className='md:h-[300px] h-[250px] lg:h-[300px] p-3' /></figure>
                <div className="card-body">
                    <div className='flex items-center'>
                        {
                        allSellers &&  allSellers.map(allSeller =>
                                allSeller?.email === email && allSeller?.verified === "verified" ?
                                    <div>
                                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                                    </div> :
                                    <div>

                                    </div>)


                        }
                    </div>
                    <p className='font-bold'>Location: <small>{location}</small></p>
                    <p className='font-bold'>Resale Price:${resale_price}</p>
                    <p className='font-bold'>Year of use : {year_of_use}</p>
                    <p className='font-bold'>Condition : {condition}</p>

                    <div className="card-actions">

                        {paid && paid === true ?

                            <button className='btn btn-primary' disabled>Sold</button> :
                            <label htmlFor="booking-modal" onClick={() => setBookProduct(product)} className="btn btn-primary rounded-3xl">Book Product</label>}
                        <button onClick={() => handelWishlist(product)} className='btn btn-success rounded-3xl'>Add In Wishlist</button>
                    </div>
                </div>
            </div>
          }
        </div>
    );
};

export default Product;