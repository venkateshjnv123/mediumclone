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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Import the functions you need from the SDKs you nee
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAevoliKX3OiXq4fPNovZhkNmgMDrkF-iU",
  authDomain: "patnala1-8482d.firebaseapp.com",
  databaseURL: "https://patnala1-8482d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "patnala1-8482d",
  storageBucket: "patnala1-8482d.appspot.com",
  messagingSenderId: "870911648161",
  appId: "1:870911648161:web:396e5cff1d72c18eadebe0",
  measurementId: "G-380DS3VH0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
