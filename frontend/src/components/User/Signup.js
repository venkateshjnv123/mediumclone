import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, json, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setnameValue, setusernameValue , setloggedinValue} from "../redux/reduxslice";
import { toast } from "react-toastify";
// const categories = [
//   'Software Development',
//   'Programming',
//   'Web Development',
//   'Data Science',
//   'Design',
//   'Marketing',
//   'Finance',
//   'Business',
//   'Healthcare',
//   'Education',
// ];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    localStorage.setItem("signinvalues", JSON.stringify(values));
    fetch("https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/signup", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, 
      body : JSON.stringify({
        "user" : {
          "email" : values['email'],
          "password" : values['password'],
        }
      }),   
    })
    .then((response) => {response.json() ;
    if (!response.ok) {
     console.log("Error");
    }})
        .then(json => { console.log(json);});
    //dispatch(setnameValue(values['name']));
    dispatch(setusernameValue(values['email']));
    //dispatch(setloggedinValue(true));
    //localStorage.setItem("loggedin" , "yes");
    //navigate('/home');
    console.log(values);
  };

  return (
    <div className="flex justify-center items-initial md:items-center bg-gray-100 md:min-w-[1200px] min-h-[100vh]">
      <div className="flex items-center w-screen md:w-1/2 bg-white rounded shadow p-6">
        <div className="w-full">
          <h1 className="text-[40px] font-[700] text-center mb-[35px] md:mb-[25px]">
            Join Us
          </h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              name: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Password is required";
              } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters long";
              }
              if (!values.confirmPassword) {
                errors.confirmPassword = "Confirm Password is required";
              } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords do not match";
              }
              if (!values.name) {
                errors.name = "Name is required";
              }
              // if (!values.categories) {
              //   errors.categories = "Category is required";
              // }
              return errors;
            }}
            onSubmit={async (values) => {
            localStorage.setItem("signinvalues", JSON.stringify(values));
      fetch("https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/create/author", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json, text/plain, */*'
      }, 
      body : JSON.stringify({
          "email" : values['email'],
          "password" : values['password'],
          "name" : values["name"]

      }),   
    })
    .then((response) => {response.json();
      console.log(response);
    if (!response.ok) {
     console.log("Error");
    }})
        .then((json) => { console.log(json)
        //  toast.success(json['status']['message']) 
          //localStorage.setItem("id", json['data']['id'])
          dispatch(setloggedinValue(true));
          localStorage.setItem("loggedin" , "yes");});
    dispatch(setnameValue(values['name']));
    dispatch(setusernameValue(values['email']));
    navigate('/home');
    console.log(values);
            }}
          >
            <Form>
              <div className="my-4 w-full md:w-1/2 mx-auto">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-[700] mb-2 tracking-[0.03rem] max-w-[50%] ml-[15px]"
                >
                  Email
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

              <div className="mb-4 w-full md:w-1/2 mx-auto">
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
              <div className="mb-4 w-full md:w-1/2 mx-auto">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-[700] mb-2 tracking-[0.03rem] max-w-[50%] ml-[15px]"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full px-3 py-2 border rounded-[25px] shadow-sm"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 mx-auto">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-[700] mb-2 tracking-[0.03rem] max-w-[50%] ml-[15px]"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-3 py-2 border rounded-[25px] shadow-sm"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* <div className="mb-4">
              <label className="text-gray-700 font-bold">
                Categories:
              </label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      name="categories"
                      value={category}
                      className="form-checkbox h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            <ErrorMessage name="categories" component="div" className="text-red-500" />
            </div> */}
              <div className="w-fit mx-auto">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-[500] py-2 px-[20px] rounded-[25px] hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          </Formik>

          <h6 className="w-fit mx-auto my-[20px]"> or </h6>

          <div className="my-4 flex flex-col space-y-2">
            <div className="w-[250px] mx-auto my-[15px]">
              <button className="w-full font-[500] py-2 px-[25px] rounded-[25px] border-[1px] border-black flex items-center justify-center">
                <FaGoogle className="mr-[15px]" fill="red" />
                Sign Up with Google
              </button>
            </div>
            <div className="w-[250px] mx-auto my-[15px]">
              <button className="w-full font-[500] py-2 px-[25px] rounded-[25px] border-[1px] border-black flex items-center justify-center">
                <FaFacebook className="mr-[15px]" fill="blue" />
                Sign Up with Facebook
              </button>
            </div>
            {/* <div className="w-fit mx-auto">
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 flex items-center justify-center">
              <FaInstagram className="mr-[15px]" fill="red" />
              Sign in with Instagram
            </button>
          </div> */}
          </div>

          <h6 className="w-fit mx-auto my-[30px]">
            {" "}
            Already have an account?{" "}
            <Link to="/signin">
              <span className="text-emerald-700 font-[700]">Sign in</span>
            </Link>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
