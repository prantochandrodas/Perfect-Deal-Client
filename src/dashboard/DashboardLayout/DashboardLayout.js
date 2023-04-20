import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Footer from '../../Footer/Footer';
import HeaderNavbar from '../../Pages/Header/HeaderNavbar/HeaderNavbar';
import useAdmin from '../../Pages/Hooks/UseAdmin';
import UseSeller from '../../Pages/Hooks/UseSeller';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Spinner/Spinner';
import './DashboardLayout.css'
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const { data: getUser = [], isLoading, refetch } = useQuery({
        queryKey: ['getUser'],
        queryFn: () => fetch(`https://perfect-deal-server.vercel.app/getUser?email=${user?.email}`)
            .then(res => res.json())
    });
    if (isLoading) {
        return <Spinner></Spinner>
    }
  
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <div className="drawer drawer-mobile z-0 relative">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="border border-slate-300 menu p-4 w-80 bg-white text-xl font-bold text-base-content">
                        
                        <li><Link to='/dashBoard' className='font-medium border-b border-slate-300'>My Orders</Link></li>
                        <li><NavLink to='/dashBoard/wishList' className='font-medium border-b border-slate-300'>My WishList</NavLink></li>
                        {
                            getUser?.role === "seller" ?
                                <>
                                    <li><NavLink to='/dashBoard/addProduct'>Add Product</NavLink></li>
                                    <li><NavLink to='/dashBoard/myproducts'>My products</NavLink></li>
                                </> :
                                <></>
                        }
                        {
                            getUser?.role === "admin" ?
                                <>
                                    <li><NavLink to='/dashBoard/allusers'>All Users</NavLink></li>
                                    <li><NavLink to='/dashBoard/allSellers'>All Seller</NavLink></li>
                                </> :
                                <></>
                        }
                        {/* {isAdmin &&
                           
                        }
                        {
                            isSeller &&
                            <>
                                <li><NavLink to='/dashBoard/addProduct'>Add Product</NavLink></li>
                                <li><NavLink to='/dashBoard/myproducts'>My products</NavLink></li>
                            </>
                        } */}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;