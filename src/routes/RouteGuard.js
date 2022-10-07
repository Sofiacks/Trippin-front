import React from "react";
import {Navigate, Outlet } from 'react-router-dom';

const RouteGuard = () => {

    function hasJwt () {
        let flag = false ;

        localStorage.getItem("token") ? flag=true : flag=false ;
      
        flag=true;
        return flag;
    }
    // 
    return hasJwt () ? <Outlet/> : <Navigate to="/login"/>;

    
};

export default RouteGuard;