import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const AllProduct = ({ data, setBookProduct }) => {
    const { product_name, picture, resale_price, paid } = data;
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
        fetch('http://localhost:5000/wishlist', {
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
    return (
        <div class="block rounded-lg p-4 bg-white drop-shadow-lg ease-in duration-300 hover:drop-shadow-2xl shadow-indigo-100 lg:w-[380px]">
        <img
            alt="Home"
            src={picture}
            class="h-[350px] w-full rounded-md object-cover"
        />

        <div class="mt-2">
            <dl>
                <div>
                    <p className='text-black text-2xl font-semibold'>{product_name}</p>
                </div>
                <div>
                    <p className='text-black font-medium'>Price: {resale_price}</p>
                </div>
                {/* <div className="card-actions justify-end">
                 <Link to={`/products/${category_id}`}> <button  className="btn btn-primary rounded-3xl">See All</button></Link>
              </div> */}
            </dl>
            <dl>

                <label htmlFor="booking-modal" onClick={() => setBookProduct(data)} className="btn btn-primary rounded-3xl btn-sm">Book Product</label>
                <button onClick={() => handelWishlist(data)} className='btn btn-success rounded-3xl btn-sm'>Add In Wishlist</button>
            </dl>

        </div>
    </div>
    );
};

export default AllProduct;




