import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyLayout from './componenets/MyLayout/MyLayout';
import Home from './componenets/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
