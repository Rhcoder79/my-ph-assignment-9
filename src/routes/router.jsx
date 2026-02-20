import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../components/home/Home";
import PrivateRoute from "../privider/PrivateRoute";

const router=createBrowserRouter(
    [
     {
       path:"/",
       element: <HomeLayout></HomeLayout>,
       children: [
      {
        path: "/", 
        element: <Home></Home>,
        loader:()=>fetch("/services.json")
      }, 
      {
        path: "/services/:id", 
        loader:()=>fetch("/services.json"),
        element: <PrivateRoute><h2 className="text-center py-10">Our Services Layout</h2></PrivateRoute>,
      },
      {
        path: "/profile", 
        element: <h2 className="text-center py-10">User Profile Layout</h2>,
      },
      
    ],
     },
     {
        path:'/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
        path:'/auth/login',
        element:<Login></Login>
            },
             {
        path:'/auth/register',
        element:<Register></Register>
            }
        ]
     },
     {
        path:"/*",
        element: <h2>error-404</h2>
     },      
    ]
)
export default router;