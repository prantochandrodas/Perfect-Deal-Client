import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import UseSeller from '../Pages/Hooks/UseSeller';
import Spinner from '../Spinner/Spinner';

const SellerRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    const [isSeller,isSellerLoading]=UseSeller(user?.email);
    const location=useLocation();
    if(loading || isSellerLoading){
        return <Spinner></Spinner>

    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default SellerRoute;