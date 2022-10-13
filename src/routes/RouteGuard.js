import React, { useContext } from "react";
import {Navigate, Outlet } from 'react-router-dom';
import loginContext from "../context.js/loginContext";

const RouteGuard = () => {

    const {token, setToken} = useContext(loginContext);

    function hasJwt () {
        let flag = false ;

        token === null? flag=false : flag=true ;
      
        //flag=false;
        console.log("flag: " + flag + " ,token JWT: " + token );
        return flag;
    }
    // 
    return hasJwt () ? <Outlet/> : <Navigate to="/login"/>;

    
};

export default RouteGuard;