import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HeaderNavbar from '../../Pages/Header/HeaderNavbar/HeaderNavbar';

const DashboardLayout = () => {
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>My appointments</Link></li>
                        <li><Link to='/dashBoard/allusers'>All Users</Link></li>
                        <li><Link to='/dashBoard/adddoctor'>Add A Doctor</Link></li>
                        <li><Link to='/dashBoard/mannageDoctors'>Manage Doctors</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;