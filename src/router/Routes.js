import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import MyReview from "../pages/MyReview";
import Register from "../pages/Register";
import DetailsService from "../pages/services/DetailsService";
import Services from "../pages/services/Services";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreviews',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <DetailsService></DetailsService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])