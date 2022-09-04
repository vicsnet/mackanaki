import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {
    const { user } = useAuth();
    const location = useLocation();

    return (
        user ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />
    );
};

export default PrivateRoute;