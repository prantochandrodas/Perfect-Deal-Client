import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <p>Loading...</p>

    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivetRoute;