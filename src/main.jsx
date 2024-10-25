import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home/Home'
import Products from './pages/Home/Products/Products'
import myCreateRoute from './Route/Route'

// 1 num kaj: route create

// const myCreateRoute = createBrowserRouter([
//   {
//     path:"/",
//     element: <div>This is my first home route</div>
//   },
//   {
//     path:"/products",
//     element: <div>this is my products route</div>
//   },
//   {
//     path:"/about",
//     element: <div> this is my about route</div>
//   }
// ])

// 2 no kaj: nested route create

// const myCreateRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <section>
//       <div>This is a fixed item</div>
//       <Outlet></Outlet>
//     </section>,
//     children:[
//       {
//         path:"/",
//         element: <div>This is home route</div>

//       },
//       {
//         path:"/products",
//         element: <div> Products page</div>
//       }
//     ]
//   }
// ])

// const myCreateRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children:[
//       {
//         path:"/",
//         element: <Home></Home>

//       },
//       {
//         path:"/products",
//         element: <Products></Products>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={myCreateRoute}></RouterProvider>
  </StrictMode>,
)
