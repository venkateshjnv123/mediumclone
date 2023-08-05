import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";import BlogForm from "./components/Posts/Addpost";
import Myposts from "./components/Posts/Mypost";
import LoginPage from "./components/User/Signin";
import RegistrationPage from "./components/User/Signup";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/MainPage";
import PostsPage from "./components/LandingPage/postsPage";
import EditForm from "./components/Posts/Editpost";
import MyPostsPage from "./components/LandingPage/Mypostshow";
import MembershipPricingPage from "./components/Membership/Membership";
import Profile from "./components/User/profile";
import ExploreTopics from "./components/HomePage/Alltopics";
import store from "./components/redux/store";
import OthersProfile from "./components/User/othersProfile";

import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from "./Protected";
import Othersposts from "./components/User/Othersposts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Protected><HomePage/></Protected> ,
  },
  {
    path: "/add",
    element: <Protected> <BlogForm /></Protected>,
  },
  {
path : '/edit',
element :<Protected><EditForm/></Protected> 
  },
  {
    path: "/myposts",
    element:<Protected><Myposts /></Protected> ,
  },{
path : '/mypostsshow',
element : <Protected><MyPostsPage/></Protected>
  },
  {
    path: "/signin",
    element:<LoginPage /> ,
  },
  {
    path: "/signup",
    element: <RegistrationPage />,
  },
 {
  path : '/membership',
  element :<Protected><MembershipPricingPage/></Protected> 
 },{
    path: "/postpage",
    element:<Protected><PostsPage /></Protected> ,
  },
  {
    path: "/profile",
    element:<Protected><Profile /></Protected> ,
  },
  {
    path : '/alltopics',
    element :<Protected><ExploreTopics/></Protected> 
  },
   { path: "/oprofile",
    element:<Protected><OthersProfile /></Protected> ,
  },{
    path : '/otherposts',
    element : <Othersposts/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer  style={{zIndex : 9999999}}/>
    <RouterProvider router={router} />
    </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
