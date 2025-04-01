import { createBrowserRouter, Navigate } from "react-router";
import App from "../components/App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Catalogpage from "../pages/catalog/Catalogpage";
import ProductDetails from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/catalog/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";




export const router = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    children:[
        { path:"",element:<HomePage/>},
        { path:"about",element:<AboutPage/>},
        { path:"contact",element:<ContactPage/>},
        { path:"catalog",element:<Catalogpage/>},
        { path:"catalog/:id",element:<ProductDetails/>},
        { path:"error",element:<ErrorPage/>},
        { path:"server-error",element:<ServerError/>},
        { path:"not-found",element:<NotFound/>},
        { path:"*",element:<Navigate to="/not-found" />},
    ]

}

])