import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext, useFormik, FormikConsumer } from "formik";
import * as Yup from "yup";
import Navbar from "../HomePage/Navbar";
import { useLocation } from "react-router-dom";

const EditForm = () => {
const location = useLocation();
const [initialValues, setinitialvalues] = useState(location.state.values);
const [initialstatus, setinitialstatus] = useState(location.state.values['status'])

  const validationSchema = Yup.object({
   // date: Yup.string().required("Date is required"),
    title: Yup.string().required("Title is required"),
    subtitle: Yup.string().required("Subtitle is required"),
    content: Yup.string().required("Content is required"),
    featuredImage: Yup.string().required("Featured Image is required"),
    authorName: Yup.string().required("Author Name is required"),
    categories: Yup.string().required("Title is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {

    let array1 = JSON.parse(localStorage.getItem("blogs")) || [];
    if(initialstatus === "No"){
        values['status'] = "Yes"
        array1.push(values);
        localStorage.setItem("blogs", JSON.stringify(array1));
        console.log(values);
        setSubmitting(false);
    }
    
    // Handle form submission here, e.g., send data to server, etc.
  };
  const handleSaveDraft = (values) => {
    let array1 = JSON.parse(localStorage.getItem("blogs")) || [];
    values['status'] = "No"
    array1.push(values);
    console.log('Saving draft:', values);
    localStorage.setItem("blogs", JSON.stringify(array1));
  };


  return (
    <div>
      <Navbar />
      <div className="w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Create a Blog</h2>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
         
        >
             {({ isSubmitting }) => (
          <Form className="space-y-4">

            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-medium mb-1">
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="border rounded-md px-3 py-2"
                //onChange={formik.handleChange}
                //value={formik.values.title}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subtitle" className="text-sm font-medium mb-1">
                Subtitle
              </label>
              <Field
                type="text"
                id="subtitle"
                name="subtitle"
                className="border rounded-md px-3 py-2"
                // onChange={formik.handleChange}
                // value={formik.values.subtitle}
              />
              <ErrorMessage
                name="subtitle"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="content" className="text-sm font-medium mb-1">
                Content
              </label>
              <Field
                as="textarea"
                id="content"
                name="content"
                className="border rounded-md px-3 py-2"
                rows="5"
                // onChange={formik.handleChange}
                // value={formik.values.content}
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="featuredImage"
                className="text-sm font-medium mb-1"
              >
                Featured Image URL
              </label>
              <Field
                type="text"
                id="featuredImage"
                name="featuredImage"
                className="border rounded-md px-3 py-2"
                // onChange={formik.handleChange}
                // value={formik.values.featuredImage}
              />
              <ErrorMessage
                name="featuredImage"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="authorName" className="text-sm font-medium mb-1">
                Author Name
              </label>
              <Field
                type="text"
                id="authorName"
                name="authorName"
                className="border rounded-md px-3 py-2"
                // onChange={formik.handleChange}
                // value={formik.values.authorName}
              />
              <ErrorMessage
                name="authorName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="categories" className="text-sm font-medium mb-1">
                Categories (up to 3)
              </label>
              <Field
                type="text"
                id="categories"
                name="categories"
                className="border rounded-md px-3 py-2"
                placeholder="Enter categories separated by commas"
                // onChange={formik.handleChange}
                // value={formik.values.categories}
              />
              <ErrorMessage
                name="categories"
                component="div"
                className="text-red-500"
              />
            </div>

           
            <div className="flex space-x-4">
                {
                    initialstatus === 'yes' ?
                    <></> :
                    <FormikConsumer>
                    {({ values }) => (
                      <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                        onClick={() => handleSaveDraft(values)}
                      >
                        Save Draft
                      </button>
                    )}
                  </FormikConsumer>
                }
           
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
             )}
        </Formik>
      </div>
    </div>
  );
};

export default EditForm;
