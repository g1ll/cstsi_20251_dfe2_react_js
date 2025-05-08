/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useAuthContext } from '../../contexts/AuthProvider';
import { Navigate } from 'react-router-dom';

const PriviteRoute = ({children}) => {
    const { isLogged } = useAuthContext()

    if (!isLogged) return <Navigate to="/login" />;

    return children
}

export default PriviteRoute
