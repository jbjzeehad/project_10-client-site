import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import SignUp from './Component/SignUp/SignUp';
import Root from './Root/Root';
import AddBook from './Component/AddBook/AddBook';
import AllBook from './Component/AllBook/AllBook';
import BorrowBook from './Component/BorrowBook/BorrowBook';
import LogIn from './Component/LogIn/LogIn';
import UpdateBook from './Component/UpdateBook/UpdateBook';
import AuthProviders from './Component/Providers/AuthProviders';
import PrivateRoutes from './Component/PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <PrivateRoutes> <AddBook></AddBook></PrivateRoutes>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/allbooks/${params.id}`)
      },
      {
        path: "/borrow",
        element: <PrivateRoutes><BorrowBook></BorrowBook></PrivateRoutes>,
      },
      {
        path: "/all",
        element: <PrivateRoutes><AllBook></AllBook></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/allbooks')
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)
