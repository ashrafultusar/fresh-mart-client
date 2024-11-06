import {
    createBrowserRouter,
    
} from "react-router-dom";
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Login from "../User/Login";
import Registration from "../User/Registration";
  

export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Registration></Registration>
            }
      ]
    },
]);
  

