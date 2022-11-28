import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const { data: allusers = [], isLoading,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers',{
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
            headers:{
                authorization:`bearar ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                console.log(data);
                toast.error('User Deleted', {
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
                            allusers.map((alluser, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{alluser.name}</td>
                                <td>{alluser.email}</td>
                                <td>{alluser.role}</td>
                                <td><button onClick={()=>handelDelete(alluser._id)} className='btn btn-error'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;