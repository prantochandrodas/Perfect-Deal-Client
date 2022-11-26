import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Pages/Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin(user?.email);
    const location=useLocation();
    if(loading || isAdminLoading){
        return <p>Loading...</p>

    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default AdminRoute;