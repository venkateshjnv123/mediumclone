import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setloggedinValue, setnameValue, setusernameValue } from "../redux/reduxslice";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async(values) => {
    //const val = JSON.parse(localStorage.getItem('signinvalues'));
   // if(val['email'] === values['email'] && val['password'] === values['password']){
      // dispatch(setusernameValue(val['username']));
      // dispatch(setnameValue(val['name']));
      // dispatch(setloggedinValue(true));
      // localStorage.setItem("loggedin" , "yes");
      // navigate('/home');
      // toast.success("logged in successfully");
    const data = {
            "email" : values['email'],
            "password" : values['password'],
        }
     axios.post('https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/author/login', data)
     .then((response)=> {
      console.log('Sign-up successful:', response.data);
      const jwtToken = response.data.token;
      localStorage.setItem('jwtToken', jwtToken);
      navigate("/home");
     }).catch((error) => {
      toast.error("Incorrect details entered");
     })
      
    //   fetch("https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/author/login", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json, text/plain, */*'
    //   }, 
    //   body : JSON.stringify({
    //       "email" : values['email'],
    //       "password" : values['password'],
    //   }),   
    // })
    // .then((response) => {
    //   console.log(response.data);
    // if (!response.ok) {
    //  console.log("Error");
    // }})
    //     .then((json) => { //console.log(json)
    //     //  toast.success(json['status']['message']) 
    //       //localStorage.setItem("id", json['data']['id'])r1
    //       localStorage.setItem("loggedin" , "yes");
    //       navigate("/home");});

    // }
    // else{
    //  
    // }
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white md:bg-gray-100">
      <div className="flex items-center w-screen md:w-1/2 bg-white rounded md:shadow p-6">
        <div className="w-full">
          <h1 className="text-[40px] font-[700] text-center mb-[50px] md:mb-[25px]">
            Welcome back!
          </h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              }
              if (!values.password) {
                errors.password = "Password is required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="my-4 w-full md:w-1/2 mx-auto">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-[700] mb-2 tracking-[0.03rem] max-w-[50%] ml-[15px]"
                >
                  Email id
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-[25px] shadow-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="my-4 w-full md:w-1/2 mx-auto">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-[700] mb-2 tracking-[0.03rem] max-w-[50%] ml-[15px]"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-[25px] shadow-sm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-fit mx-auto">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-[500] py-2 px-[20px] rounded-[25px] hover:bg-blue-700"
                >
                  Sign in
                </button>
              </div>
            </Form>
          </Formik>

          <h6 className="w-fit mx-auto my-[20px]"> or </h6>

          <div className="mt-4 flex flex-col space-y-2">
            <div className="w-[250px] mx-auto my-[15px]">
              <button className="w-full font-[500] py-2 px-[25px] rounded-[25px] border-[1px] border-black flex items-center justify-center">
                <FaGoogle className="mr-[15px]" fill="red" />
                Sign in with Google
              </button>
            </div>
            <div className="w-[250px] mx-auto my-[15px]">
              <button className="w-full font-[500] py-2 px-[25px] rounded-[25px] border-[1px] border-black flex items-center justify-center">
                <FaFacebook className="mr-[15px]" fill="blue" />
                Sign Up with Facebook
              </button>
            </div>
            {/* <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 flex items-center justify-center">
              <FaInstagram className="mr-2" />
              Sign in with Instagram
            </button> */}
          </div>

          <h6 className="w-fit mx-auto my-[30px]">
            {" "}
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-emerald-700 font-[700]">Sign Up</span>
            </Link>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
