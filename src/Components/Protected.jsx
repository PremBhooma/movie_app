import React from "react";
// import Home from "../Pages/Home";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
