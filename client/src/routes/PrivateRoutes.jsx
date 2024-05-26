import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const {  token, isAuth } = useSelector((state) => state.auth );
  
  return !token===null&& isAuth?children:<Navigate to={"/login"}>Login</Navigate>;
};

export { PrivateRoutes };
