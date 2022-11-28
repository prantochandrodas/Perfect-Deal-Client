import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Footer from '../../Footer/Footer';
import HeaderNavbar from '../../Pages/Header/HeaderNavbar/HeaderNavbar';
import useAdmin from '../../Pages/Hooks/UseAdmin';
import UseSeller from '../../Pages/Hooks/UseSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = UseSeller(user?.email);
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-zinc-300 text-xl font-bold text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {isAdmin &&
                            <>
                                <li><Link to='/dashBoard/allusers'>All Users</Link></li>
                                <li><Link to='/dashBoard/allSellers'>All Seller</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashBoard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashBoard/myproducts'>My products</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;