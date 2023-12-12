import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Protected from "../Components/Protected";

const AllRoutes = () => {
  return (
    <>
      {
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected />}>
            <Route path="/" index element={<Home />} />
          </Route>
        </Routes>
      }
    </>
  );
};

export default AllRoutes;
