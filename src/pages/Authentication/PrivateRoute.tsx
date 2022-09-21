import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {
    const isLoggedIn = useAuth();
    console.log(isLoggedIn);
    const location = useLocation();

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    );
};

export default PrivateRoute;