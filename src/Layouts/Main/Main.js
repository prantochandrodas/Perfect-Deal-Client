import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Pages/Header/Header/Header';
import HeaderNavbar from '../../Pages/Header/HeaderNavbar/HeaderNavbar';


const Main = () => {
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;