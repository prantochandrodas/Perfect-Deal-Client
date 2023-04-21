import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';

const AllSellers = () => {
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('https://perfect-deal-server.vercel.app/allSellers', {
            });
            const data = await res.json();
            return data;
        }
    });

    // delete a user
    const handelDelete = (id) => {
        fetch(`https://perfect-deal-server.vercel.app/seller/${id}`, {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                
                    toast.error('Seller Deleted', {
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
    const handelVerified = (email) => {
        fetch(`https://perfect-deal-server.vercel.app/allSellers/unverifyed/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Seller unverifed successfull', {
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
            });
    }


    const handelUnVerified = (email) => {
        fetch(`https://perfect-deal-server.vercel.app/allSellers/verified/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Seller unverifed successfull', {
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
            });
    }
console.log(allSellers);

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
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Seller Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                        allSellers &&  allSellers.map((allSeller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{allSeller.name}</td>
                                <td>{allSeller.email}</td>
                                <td>{allSeller.role}</td>
                                {
                                    allSeller?.verified === "verified" ?
                                        <td><button onClick={() => handelVerified(allSeller.email)} className='btn btn-primary'>verified</button></td>
                                        :
                                        <td><button onClick={() => handelUnVerified(allSeller.email)} className='btn btn-primary'>Uverified</button></td>
                                }
                                <td><button onClick={() => handelDelete(allSeller._id)} className='btn btn-error'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;