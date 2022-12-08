import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ReqAuth = ({children}) => {
    const auth = useSelector(store => store.AuthRedux.isAuth)
    const location = useLocation();
// console.log(auth)
    if(!auth){
        return <Navigate to="/login" state={{ from: location}} replace />
    }
   
 return children;
    
}
