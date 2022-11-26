import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/myorder?email=${user?.email}`;
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization:`bearar ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    // console.log(orders.length);
    if (isLoading) {
        return <p>Loading...</p>
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                      {

                     orders &&  orders.map((order,i)=>  <tr>
                            <th>{i+1}</th>
                            <td>{order.product_name}</td>
                            <td><img src={order.picture} className="w-[60px]" alt="" /></td>
                            <td>${order.resale_price}</td>
                            <td><button className='btn btn-primary'>Pay</button></td>
                        </tr>)
                      }
                      
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;