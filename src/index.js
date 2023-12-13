import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from './Pages/Login';
import Protected from './Components/Protected';
import Home from './Pages/Home';
import { AuthContextProvider } from './Routes/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Protected />} >
        <Route path="/" index element={<Home />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AuthContextProvider>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  // </AuthContextProvider>
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
