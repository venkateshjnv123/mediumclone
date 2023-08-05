import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogForm from "./components/Posts/Addpost";
import Myposts from "./components/Posts/Mypost";
import LoginPage from "./components/User/Signin";
import RegistrationPage from "./components/User/Signup";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/MainPage";
import PostsPage from "./components/LandingPage/postsPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditForm from "./components/Posts/Editpost";
import MyPostsPage from "./components/LandingPage/Mypostshow";
import MembershipPricingPage from "./components/Membership/Membership";
import Profile from "./components/User/profile";
import ExploreTopics from "./components/HomePage/Alltopics";
import { Provider } from 'react-redux'
import store from "./components/redux/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <BlogForm />,
  },
  {
path : '/edit',
element : <EditForm/>
  },
  {
    path: "/myposts",
    element: <Myposts />,
  },{
path : '/mypostsshow',
element : <MyPostsPage/>
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegistrationPage />,
  },

 {
  path : '/membership',
  element : <MembershipPricingPage/>
 },{
    path: "/postpage",
    element: <PostsPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path : '/alltopics',
    element : <ExploreTopics/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
    </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
