import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Register/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Home from "../Pages/Home/Home";
import Order from "../Pages/Order/Order";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Router not found</h2>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
          path: '/menu',
          element: <Menu/>,
        },
        {
          path: '/order',
          element: <Order/>,
        },
        {
            path: 'register',
            element: <Register/>,
        },
        {
            path: 'login',
            element: <Login/>,
        },
       
      ]
    },
  ]);

  export default router;


 
  