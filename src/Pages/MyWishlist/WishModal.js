import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const WishModal = ({product,setProduct}) => {
    const {resale_price,picture,product_name,verified,_id}=product;
    const {user}=useContext(AuthContext);


    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(name,email,phone,location);

        const booking={
            order_id:_id,
            name,
            email,
            phone,
            picture,
            product_name,
            verified,
            resale_price,
            location
        }
        fetch('https://perfect-deal-server.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if (data.acknowledged) {
                toast.success('Booking successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    setProduct(null);
            }
        })
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelSubmit} className='grid grid-cols-1 gap-4 mt-10 '>
                        <input name='name' disableds defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='text' type="text" defaultValue={`price:$${resale_price}`} placeholder="Price" disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input type="text" placeholder='Meet Loacation' name='location' className="input input-bordered w-full" required />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WishModal;