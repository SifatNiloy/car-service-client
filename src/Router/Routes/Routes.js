import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
]);

export default router;