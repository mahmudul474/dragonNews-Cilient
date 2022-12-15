import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Shared/AuthContext/AuthContext';

const Private = ({children}) => {
const {user,loading}=useContext(UserContext)
const location=useLocation()


if(loading){
    return<div className="spinner-border text-success" role="status">
    <span className="sr-only"></span>
  </div>
}

if(user && user.uid) {
    return children
}



    return <Navigate  to="/login" state={{from:location}} replace ></Navigate>
    
};

export default Private;