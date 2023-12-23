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
        element: <AddBook></AddBook>,
      },
      {
        path: "/update",
        element: <UpdateBook></UpdateBook>,
      },
      {
        path: "/borrow",
        element: <BorrowBook></BorrowBook>,
      },
      {
        path: "/all",
        element: <AllBook></AllBook>,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
