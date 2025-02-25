import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Register/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Home from "../Pages/Home/Home";
import Order from "../Pages/Order/Order";
import Secrent from "../Pages/Shared/Secrent";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/AllUsers/AllUsers";


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
          path: '/order/:category',
          element: <Order/>,
        },
        {
          path: 'secret',
          element: <Secrent/>,
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

    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'cart',
          element: <Cart/>,
        },
        {
          path: 'users',
          element: <AllUsers/>,
        }
      ]
    }
  ]);

  export default router;


 
  