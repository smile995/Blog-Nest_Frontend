import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Roots from './Pages/Roots';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import AddBlog from './Components/AddBlog';
import AllBlogs from './Components/AllBlogs';
import FeaturedBlog from './Components/FeaturedBlog';
import Wishlist from './Components/Wishlist';
import AuthContext from './assets/ContextApi/AuthContext';
import Login from './Components/Login';
import Register from './Components/Register';
import Private from './Components/Private';
import Details from './Components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/:id',
        element: <Private><Details></Details></Private>,
      },
      {
        path: '/addBlog',
        element: <Private><AddBlog></AddBlog></Private>
      },
      {
        path: '/allBlogs',
        element: <Private><AllBlogs></AllBlogs></Private>
      },
      
      {
        path: '/featuredBlogs',
        element:<Private> <FeaturedBlog></FeaturedBlog></Private>
      },
      {
        path: '/wishlist',
        element: <Private><Wishlist></Wishlist></Private>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
