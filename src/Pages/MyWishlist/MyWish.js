import React from 'react';

const MyWish = ({ wishlist, setProduct }) => {
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


    } = wishlist;
    // console.log(wishlist)
    return (
        <div>
            <div className="card lg:w-[350px]  bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p className='font-bold'>Location: <small>{location}</small></p>
                    <p className='font-bold'>Resale Price:${resale_price} / Original Price:{original_price}</p>
                    <p className='font-bold'>Year of use : {year_of_use}</p>
                    <p className='font-bold'>Condition : {condition}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="booking-modal" onClick={() => setProduct(wishlist)} className="btn btn-primary">Book Product</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWish;