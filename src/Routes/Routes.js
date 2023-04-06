import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllSellers from "../Pages/AllSellers/AllSellers";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Blogs from "../Pages/Blogs/Blogs";
import Demo from "../Pages/Demo/Demo";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MyProducts from "../Pages/MyProducts/MyProducts";
import MyWishList from "../Pages/MyWishlist/MyWishList";
import Payment from "../Pages/Payment/Payment";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Sigmup/Signup";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";
import SellerRoute from "./SellerRoute";


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
                 loader:({params})=>fetch(`https://perfect-deal-server.vercel.app/products/${params.id}`)
            },
            
            {
                path:'*',
                element:<Error></Error>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]

    },
    {
        path:'/dashBoard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashBoard',
                element:<PrivetRoute><MyOrder></MyOrder></PrivetRoute>
            },
            {
                path:'/dashBoard/wishList',
                element:<MyWishList></MyWishList>
            },
            {
                path:'/dashBoard/allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashBoard/allSellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashBoard/addProduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashBoard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashBoard/payment/:id',
                element:<Payment></Payment>,
                 loader:({params})=>fetch(`https://perfect-deal-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
]);
export default router;