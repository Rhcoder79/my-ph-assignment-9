import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../components/home/Home";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../privider/PrivateRoute"
import Profile from "../pages/Profile";
import ServicePage from "../pages/ServicePage";
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
        path: "/services", 
        loader:()=>fetch("/services.json"),
        element: <PrivateRoute><ServicePage></ServicePage></PrivateRoute> ,
      },
      {
        path: "/services/:id", 
        loader:()=>fetch("/services.json"),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      },
      {
        path: "/profile", 
        element: <PrivateRoute><Profile /></PrivateRoute>,
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