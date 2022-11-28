import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';

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
    if (isLoading ) {
        return <Spinner></Spinner>
    }
    console.log(orders);
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
                            <td>{
                                    order.resale_price && !order.payed && <Link to={`/dashBoard/payment/${order._id}`} className='btn btn-primary'>Pay</Link>
                                }
                                {
                                    order.resale_price && order.payed && <button className='btn btn-success'>Payed</button>
                                }    
                            </td>
                        </tr>)
                      }
                      
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;