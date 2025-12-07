import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import Forgetpass from "../Pages/Forgetpass";
import AddService from "../Pages/AddService";
import MyServices from "../Pages/MyServices";
import UpdateService from "../Pages/UpdateService";
import MyOrders from "../Pages/MyOrders";



 export const router =   createBrowserRouter([
      {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
              path:'/services',
              Component: Services
            },
            {
              path:'/login',
              Component: Login
            },
            {
              path:'/register',
              Component: Register
            },
            {
              path:'/profile',
              element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
              path:'/details/:id',
              element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
              path:'/forgetpass/:email',
              Component: Forgetpass
            },
            {
              path:'/add-service',
              element: <PrivateRoute> <AddService></AddService> </PrivateRoute>
            },
            {
              path:'/my-services',
             element: <PrivateRoute> <MyServices> </MyServices> </PrivateRoute>
            }
            ,
            {
              path:'/update-services/:id',
              element: <PrivateRoute> <UpdateService> </UpdateService> </PrivateRoute>
            }
            ,
            {
              path:'/myorders',
              element: <PrivateRoute> <MyOrders></MyOrders> </PrivateRoute>
            }
        ]
      }
 ])