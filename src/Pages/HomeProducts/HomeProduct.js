import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import { IconName, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
const HomeProduct = ({ data, setBookProduct }) => {
    const { product_name, picture, resale_price, location, condition, year_of_use, original_price } = data;
    const { user } = useContext(AuthContext);
    const handelWishlist = (product) => {
        console.log(product._id);
        const wishList = {
            category_name: '',
            product_id: product._id,
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
                if (result === false) {
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

   const callerror=()=>{
   
        toast.error('Have to login ', {
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
    return (
        <div>
            <div class="block rounded-lg bg-white drop-shadow-lg ease-in duration-300 hover:drop-shadow-2xl shadow-indigo-100 lg:w-[300px] w-[260px]">
                <img
                    alt="Home"
                    src={picture}
                    class="h-[250px] w-full rounded-md object-cover"
                />

                <div class="mt-2 p-4">
                    <dl>
                        <div>
                            <p className='text-black text-2xl font-semibold'>{product_name}</p>
                        </div>
                       
                        <p className='font-semibold'>Price:${data.resale_price}</p>

                        {/* <div className="card-actions justify-end">
                     <Link to={`/products/${category_id}`}> <button  className="btn btn-primary rounded-3xl">See All</button></Link>
                  </div> */}
                    </dl>
                    <dl className='py-4 flex justify-between'>
                        <div className="tooltip" data-tip="Book ">
                            {
                                user?.email ?  <label htmlFor="booking-modal" 
                                
                                onClick={() => setBookProduct(data)} className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Book Now</label> : <label htmlFor="booking-modal" 
                                
                                onClick={callerror} className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Book Now</label>
                            }
                        </div>
                        <div className="tooltip" data-tip="Add Wishlist">
                           {
                                user?.email?<button onClick={() => handelWishlist(data)} className='relative text-2xl '><AiOutlineHeart></AiOutlineHeart></button>:<button  onClick={callerror} className='relative text-2xl '><AiOutlineHeart></AiOutlineHeart></button>
                           }
                            
                        </div>
                    </dl>

                </div>
            </div>
        </div>
    );
};

export default HomeProduct;