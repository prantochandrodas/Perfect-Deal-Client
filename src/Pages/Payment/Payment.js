import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation=useNavigation();
    
    const { product_name, resale_price, picture } = booking;
    if(navigation.state === 'loading'){
        return <Spinner></Spinner>
    }
    return (
        <div className='lg:ml-5'>
            <img src={picture} className="w-[100px]" alt="" />
            <h1 className='text-3xl'>Payment for {product_name}</h1>
            <p className='text-xl'>Please pay {resale_price} for this product</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;