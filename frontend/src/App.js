import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter basename="/app">
    <Routes>
      <Route path="/" element ={<LandingPage/>} />
      <Route path="/signin" element ={<LoginPage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
