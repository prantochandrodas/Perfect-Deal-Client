import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllSellers = () => {
    const { data: allSellers = [], isLoading,refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers',{
                headers:{
                    authorization:`bearar ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    // delete a user
    const handelDelete=(id)=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE',
           
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                console.log(data);
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

    if (isLoading) {
        return <p> Loading...</p>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allSellers.map((allSeller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{allSeller.name}</td>
                                <td>{allSeller.email}</td>
                                <td>{allSeller.role}</td>
                                <td><button onClick={()=>handelDelete(allSeller._id)} className='btn btn-error'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;