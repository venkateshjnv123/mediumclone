import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext, useFormik, FormikConsumer } from "formik";
import * as Yup from "yup";
import Navbar from "../HomePage/Navbar";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
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

const BlogForm = () => {
  const formik = useFormik({
   initialValues : {
    title: "",
    subtitle: "",
    content: "",
    featuredImage: "",
    authorName: "",
    categories: "",
  },
//   onSubmit: values => {
//     console.log("hi");
//     console.log(JSON.stringify(values,null, 2));
//      let array1 = JSON.parse(localStorage.getItem("blogs")) || [];
//     values['status'] = "Yes"
//     array1.push(values);
    
//     localStorage.setItem("blogs", JSON.stringify(array1));
//     console.log("done");
// //    setSubmitting(false);
//   },
});
const unique_id = uuid();
const small_id = unique_id.slice(0,8)
const location = useLocation();
const [initialValues, setinitialvalues] = useState({
  title: "",
  subtitle: "",
  content: "",
  featuredImage: "",
  authorName: "",
  categories: [],
  id : small_id,
}) ;
const [catego, setcatego] = useState(categories);
const handleAddCategory = (category) => {
  if (!categories.includes(category)) {
    setcatego([...catego, category]);
  }
};
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

  const validationSchema = Yup.object({
   // date: Yup.string().required("Date is required"),
    title: Yup.string().required("Title is required"),
    subtitle: Yup.string().required("Subtitle is required"),
    content: Yup.string().required("Content is required"),
    featuredImage: Yup.string().required("Featured Image is required"),
    authorName: Yup.string().required("Author Name is required"),
    categories: Yup.array().required("Title is required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    let array1 = JSON.parse(localStorage.getItem("blogs")) || [];
    values['status'] = "Yes";
    values['likes']= Math.ceil(Math.random()*1000);
    values['views']= Math.ceil(Math.random()*1000);
    values['comments']=Math.ceil(Math.random()*1000);
    values['date']=formatDate(new Date());
    array1.push(values);
    localStorage.setItem("blogs", JSON.stringify(array1));
    console.log(values);
    toast.success("form successfully submitted");
    resetForm();
    setSubmitting(false);
    // Handle form submission here, e.g., send data to server, etc.
  };
  const handleSaveDraft = (values) => {
    let array1 = JSON.parse(localStorage.getItem("blogs")) || [];
    values['status'] = "No";
    values['date']=formatDate(new Date());
    array1.push(values);
    console.log('Saving draft:', values);
    toast.warning("form stored submitted");
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

            <div className="mb-4">
              <label className="text-gray-700 font-bold">
                Categories:
              </label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {catego.map((category) => (
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
            <FormikConsumer>
                {({ values }) => (
            <div>
          <label>
            Additional Category:
            <Field name="newCategory" type="text" />
          </label>
          <button
            type="button"
            onClick={() => handleAddCategory(values.newCategory)}
          >
            Add
          </button>
        </div>
    )}
    </FormikConsumer>
           
            <div className="flex space-x-4">
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

export default BlogForm;
