import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";


const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]

    }
]);
export default router;