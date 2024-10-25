import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Home/Products/Products';

const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/home",
                element: <Home></Home>
            },
            {
                path:"/products",
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path:"/dashboard",
                element: <div>Dashboard</div>
            }
        ]
    },
    
])

export default myCreateRoute;