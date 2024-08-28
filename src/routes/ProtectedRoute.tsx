import * as React from 'react';
import { Navigate } from 'react-router-dom';
type ProtectedRouteType = {
    isAdmin?: boolean
    children: React.ReactNode
};
export const ProtectedRoute = ({ isAdmin, children }: ProtectedRouteType) => {
    return <>
        {isAdmin ? children : <Navigate to={'/login'} />}
    </>
};