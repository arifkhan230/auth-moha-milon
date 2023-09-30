import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyLayout from './components/MyLayout/MyLayout';
import Home from './components/Home/Home';
import Login from './Login/Login';
import Register from './Register';
import AuthProvider from './providers/AuthProvider';
import Orders from './components/Orders';
import PrivateRout from './routes/PrivateRout';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
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
        path:'/orders',
        element:<PrivateRout><Orders></Orders></PrivateRout>
      },
      {
        path:'/profile',
        element:<PrivateRout><Profile></Profile></PrivateRout>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
