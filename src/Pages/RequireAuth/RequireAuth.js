import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const RequireAuth = ({children, ...rest}) => {
    console.log(children)
    const {user, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <div className='d-flex justify-content-center my-5'>
            <Spinner  variant="warning" animation="border"/>
        </div>
    }
    if(!user?.email){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default RequireAuth;