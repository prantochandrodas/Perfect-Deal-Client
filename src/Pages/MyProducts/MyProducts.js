import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';

const MyProducts = () => {


    const { user } = useContext(AuthContext);
    const { data: myproducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`, {
                headers: {
                    authorization: `bearar ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });


    // console.log(bookings);

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/myproducts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearar ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    toast.error('Product Deleted', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    refetch();
                }

            })
    }
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Picture</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            myproducts && myproducts.map((myproduct, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{myproduct.product_name}</td>
                                <td><img src={myproduct.picture} className="w-[60px]" alt="" /></td>
                                <td>${myproduct.resale_price}</td>
                                <td>
                                  
                                    {myproduct.paid ?
                                    <button className='btn btn-success'>Sold</button>
                                :
                                        <button className='btn btn-primary'>Advertise</button>
                                }
                                </td>
                                <td><button onClick={() => handelDelete(myproduct._id)} className='btn bg-red-600'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;