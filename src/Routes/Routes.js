import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Demo from "../Pages/Demo/Demo";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Sigmup/Signup";
import PrivetRoute from "./PrivetRoute";


const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/products/:id',
                element:<PrivetRoute><Products></Products></PrivetRoute>,
                 loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]

    },
    {
        path:'/dashBoard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashBoard',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashBoard/allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashBoard/addProduct',
                element:<AddProduct></AddProduct>
            }
        ]
    }
]);
export default router;