import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
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
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
                <Link to='/home'>Sign In</Link>
              
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

        <p>No account <Link to='/signup'><span className='text-emerald-400'>Create a account</span></Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
