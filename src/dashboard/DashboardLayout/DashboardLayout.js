import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import HeaderNavbar from '../../Pages/Header/HeaderNavbar/HeaderNavbar';
import useAdmin from '../../Pages/Hooks/UseAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <div className="drawer drawer-mobile my-5">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {isAdmin &&
                            <>
                                <li><Link to='/dashBoard/allusers'>All Users</Link></li>
                                <li><Link to='/dashBoard/addProduct'>Add Product</Link></li>
                            </>
                        }
                        <li><Link to='/dashBoard/mannageDoctors'>Manage Doctors</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;