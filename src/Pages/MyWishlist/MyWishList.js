import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';
import MyWish from './MyWish';
import WishModal from './WishModal';

const MyWishList = () => {
    const [product, setProduct] = useState(null);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/wishlists?email=${user?.email}`;
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
    console.log(wishLists.length);
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className='grid lg:grid-cols-2 p-10 gap-5 md:grid-cols-2 mt-10'>
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