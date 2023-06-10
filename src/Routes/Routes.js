import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllProducts from "../Pages/AllProducts/AllProducts";
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
import SerchProduct from "../Pages/SerchProduct/SerchProduct";
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
            },
            {
                path:'/allProduct',
                element:<AllProducts></AllProducts>
            },
            {
                path:'/serch',
                element:<SerchProduct></SerchProduct>
            }, {
                path:'/myOrder',
                element:<PrivetRoute><MyOrder></MyOrder></PrivetRoute>
            },
            {
                path:'/wishList',
                element:<PrivetRoute><MyWishList></MyWishList></PrivetRoute>
            },
            {
                path:'/allUsers',
                element:<PrivetRoute><AllUsers></AllUsers></PrivetRoute>
            },
            {
                path:'/allSellers',
                element:<PrivetRoute><AllSellers></AllSellers></PrivetRoute>
            },
            {
                path:'/addProduct',
                element:<PrivetRoute><AddProduct></AddProduct></PrivetRoute>
            },
            {
                path:'/myproducts',
                element:<PrivetRoute><MyProducts></MyProducts></PrivetRoute>
            },
            {
                path:'/payment/:id',
                element:<Payment></Payment>,
                 loader:({params})=>fetch(`https://perfect-deal-server.vercel.app/bookings/${params.id}`)
            }
        ]

    },
    // {
    //     path:'/dashBoard',
    //     element:<DashboardLayout></DashboardLayout>,
    //     children:[
    //         {
    //             path:'/dashBoard',
    //             element:<MyOrder></MyOrder>
    //         },
    //         {
    //             path:'/dashBoard/wishList',
    //             element:<MyWishList></MyWishList>
    //         },
    //         {
    //             path:'/dashBoard/allUsers',
    //             element:<AllUsers></AllUsers>
    //         },
    //         {
    //             path:'/dashBoard/allSellers',
    //             element:<AllSellers></AllSellers>
    //         },
    //         {
    //             path:'/dashBoard/addProduct',
    //             element:<AddProduct></AddProduct>
    //         },
    //         {
    //             path:'/dashBoard/myproducts',
    //             element:<MyProducts></MyProducts>
    //         },
    //         {
    //             path:'/dashBoard/payment/:id',
    //             element:<Payment></Payment>,
    //              loader:({params})=>fetch(`https://perfect-deal-server.vercel.app/bookings/${params.id}`)
    //         }
    //     ]
    // }
]);
export default router;