import React, { useContext } from "react";
import {Navigate, Outlet } from 'react-router-dom';
import loginContext from "../context.js/loginContext";

const RouteGuard = () => {

    const {token, setToken} = useContext(loginContext);

    function hasJwt () {
        let flag = false ;

        console.log("token JWT: " + token);
        token === null? flag=false : flag=true ;
      
        //flag=false;
        return flag;
    }
    // 
    return hasJwt () ? <Outlet/> : <Navigate to="/login"/>;

    
};

export default RouteGuard;