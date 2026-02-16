import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router=createBrowserRouter(
    [
     {
       path:"/",
       element: <HomeLayout></HomeLayout>,
       children: [
      {
        path: "/", 
        element: <h2 className="text-center py-10">Welcome to Home Page</h2>,
      },
      {
        path: "services", 
        element: <h2 className="text-center py-10">Our Services Layout</h2>,
      },
      {
        path: "profile", 
        element: <h2 className="text-center py-10">User Profile Layout</h2>,
      },
    ],
     },
     {
        path:"/*",
        element: <h2>error-404</h2>
     },      
    ]
)
export default router;