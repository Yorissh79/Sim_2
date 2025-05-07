import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    },
    {
        path: "/admin",
        Component: Admin
    },
    {
        path: "/basket",
        Component: Basket
    }
])