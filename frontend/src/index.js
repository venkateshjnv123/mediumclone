import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/HomePage/MainPage";
import BlogForm from "./components/Posts/Addpost";
import Myposts from "./components/Posts/Mypost";
import LoginPage from "./components/User/Signin";
import RegistrationPage from "./components/User/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/add",
    element: <BlogForm />,
  },
  {
    path : '/myposts',
    element : <Myposts/>
  },{
    path : '/signin',
    element : <LoginPage/>
  },{
    path : '/signup',
    element : <RegistrationPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
