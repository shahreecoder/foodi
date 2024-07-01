import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSkeleton from '../components/LoadingSkeleton';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRouter({children}) {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <LoadingSkeleton/>
        )
       
    }

    if(user){
        return (children);
    }
    
  return (
    <Navigate to="/signup" state={{from:location}} replace></Navigate>
  )
}

export default PrivateRouter