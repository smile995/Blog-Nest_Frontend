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
        path: '/addBlog',
        element: <AddBlog></AddBlog>
      },
      {
        path: '/allBlogs',
        element: <AllBlogs></AllBlogs>
      },
      {
        path: '/featuredBlogs',
        element: <FeaturedBlog></FeaturedBlog>
      },
      {
        path: '/wishlist',
        element: <Wishlist></Wishlist>
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
