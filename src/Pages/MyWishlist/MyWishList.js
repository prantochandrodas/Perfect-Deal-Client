import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';
import MyWish from './MyWish';
import WishModal from './WishModal';

const MyWishList = () => {
    const [product, setProduct] = useState(null);
    const { user } = useContext(AuthContext);
    const url = `https://perfect-deal-server.vercel.app/wishlists?email=${user?.email}`;
    const { data: wishLists = [], isLoading } = useQuery({
        queryKey: ['wishLists'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearar ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className='grid lg:grid-cols-3 p-2 gap-5 md:grid-cols-2 mt-10 w-[90%] mx-auto'>
                {
              wishLists &&  wishLists.map(wishlist => <MyWish
                        key={wishlist._id}
                        wishlist={wishlist}
                        setProduct={setProduct}
                    ></MyWish>)
                }
            </div>
            {product && <WishModal
                setProduct={setProduct}
                product={product}
            ></WishModal>}
        </div>
    );
};

export default MyWishList;