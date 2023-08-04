import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const categories = [
  'Software Development',
  'Programming',
  'Web Development',
  'Data Science',
  'Design',
  'Marketing',
  'Finance',
  'Business',
  'Healthcare',
  'Education',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const RegistrationPage = () => {
  const handleSubmit = (values) => {
    console.log("hello");
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-96 bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            categories: [],
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            } else if (values.password.length < 6) {
              errors.password = 'Password must be at least 6 characters long';
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = 'Confirm Password is required';
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Passwords do not match';
            }
            if (!values.name) {
              errors.name = 'Name is required';
            }
            if (!values.categories) {
              errors.categories = 'Category is required';
            }
            return errors;
          }}
        onSubmit = {async (values) => {
            await sleep(500);
          console.log(values);
          }}
        >
          <Form>
            <div className="my-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email 
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
               <ErrorMessage name="email" component="div" className="text-red-500" />
             
            </div>
           
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
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
            </div>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
        <p> or </p>

        <div className="mt-4 flex flex-col space-y-2">
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 flex items-center justify-center">
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center">
            <FaFacebook className="mr-2" />
            Sign in with Facebook
          </button>
          <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 flex items-center justify-center">
            <FaInstagram className="mr-2" />
            Sign in with Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
