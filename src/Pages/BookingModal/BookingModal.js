import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ bookProduct }) => {
    const { user } = useContext(AuthContext);
    const {
        location,
        original_price,
        picture,
        product_name,
        resale_price,
        saller_name,
        verified,
        year_of_use

    } = bookProduct;

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 gap-4 mt-10 '>
                        <input name='name' disableds defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='text' type="text" defaultValue={`price:$${resale_price}`} placeholder="Price" disabled className="input input-bordered w-full" />
                        <input name='text'  type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input type="text" placeholder='Meet Loacation' name='meet_location'  className="input input-bordered w-full" required />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                      
                       
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;