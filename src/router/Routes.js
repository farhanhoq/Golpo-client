import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/services/AddService";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import MyReview from "../pages/userreviews/MyReview";
import Register from "../pages/Register";
import DetailsService from "../pages/services/DetailsService";
import Services from "../pages/services/Services";
import EditReview from "../pages/userreviews/EditReview";
import About from "../pages/home/About";
import Blog from "../Blog";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/editreview',
                element: <EditReview></EditReview>,
                loader: () => fetch('https://golpo-photography-server.vercel.app/reviews')
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://golpo-photography-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <DetailsService></DetailsService>,
                loader: ({params}) => fetch(`https://golpo-photography-server.vercel.app/services/${params.id}`)
            },
        ]
    }
])