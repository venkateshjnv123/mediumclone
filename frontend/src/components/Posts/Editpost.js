import React, { useEffect, useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormikContext,
  useFormik,
  FormikConsumer,
} from "formik";
import * as Yup from "yup";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import NavbarValidated from "../LandingPage/NavbarValidated";


const EditForm = () => {
  const location = useLocation();
  const [initialValues, setinitialvalues] = useState(location.state.values);
  const [initialstatus, setinitialstatus] = useState(
    location.state.values["status"]
  );
  const [catego, setcatego] = useState(location.state.values["categories"]);
  const handleAddCategory = (category) => {
    if (!catego.includes(category)) {
      setcatego([...catego, category]);
    }
  };

  const validationSchema = Yup.object({
    // date: Yup.string().required("Date is required"),
    title: Yup.string().required("Title is required"),
   // subtitle: Yup.string().required("Subtitle is required"),
    content: Yup.string().required("Content is required"),
    featuredImage: Yup.string().required("Featured Image is required"),
    authorName: Yup.string().required("Author Name is required"),
    categories: Yup.array().required("Title is required"),
  });

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    let array1 = JSON.parse(localStorage.getItem("blogs")) || [];
    const id = initialValues["id"];
    if (initialstatus === "No") {
      values["status"] = "Yes";
      values["likes"] = Math.ceil(Math.random() * 1000);
      values["views"] = Math.ceil(Math.random() * 1000);
      values["comments"] = Math.ceil(Math.random() * 1000);
      values["date"] = formatDate(new Date());
      console.log(values);
      setSubmitting(false);
    } else {
      console.log(id);
      values["likes"] = initialValues["likes"];
      values["views"] = initialValues["views"];
      values["comments"] = initialValues["comments"];
      values["date"] = initialValues["date"];

      console.log(values);
      setSubmitting(false);
    }
    let array2 = array1.filter((item) => item.id !== id);
    array2.push(values);
    localStorage.setItem("blogs", JSON.stringify(array2));
    toast.success("form successfully submitted");
    resetForm();
    
    navigate('/myposts');
    // Handle form submission here, e.g., send data to server, etc.
  };
  const handleSaveDraft = (values) => {
    const id = initialValues["id"];
    let array1 = JSON.parse(localStorage.getItem("blogs")) || [];
    let array2 = array1.filter((item) => item.id !== id);
    array2.push(values);
    localStorage.setItem("blogs", JSON.stringify(array2));
    toast.warning("data stored as draft");
  };

  return (
    <div>
      <NavbarValidated />
      <div className="w-full max-w-lg mx-auto mt-[70px]">
        <h2 className="text-2xl font-bold mb-4">Edit your Blog</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
             {({ isSubmitting }) => (
          <Form className="space-y-4">

            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-[700] ml-[10px] mb-1 tracking-[0.03rem]">
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="border rounded-[25px] px-3 py-2"
                //onChange={formik.handleChange}
                //value={formik.values.title}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* <div className="flex flex-col">
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
            </div> */}

            <div className="flex flex-col">
              <label htmlFor="content" className="text-sm font-[700] ml-[10px] mb-1 tracking-[0.03rem]">
                Content
              </label>
              <Field
                as="textarea"
                id="content"
                name="content"
                className="border rounded-[25px] px-3 py-2"
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
                className="text-sm font-[700] ml-[10px] mb-1 tracking-[0.03rem]"
              >
                Featured Image URL
              </label>
              <Field
                type="text"
                id="featuredImage"
                name="featuredImage"
                className="border rounded-[25px] px-3 py-2"
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
              <label htmlFor="authorName" className="text-sm font-[700] ml-[10px] mb-1 tracking-[0.03rem]">
                Author Name
              </label>
              <Field
                type="text"
                id="authorName"
                name="authorName"
                className="border rounded-[25px] px-3 py-2"
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
              <label className="text-sm font-[700] ml-[10px] mb-1 tracking-[0.03rem]">
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
            </div>
              <FormikConsumer>
                {({ values }) => (
            <div>
          <label>
            Additional Category:
            <Field name="newCategory" type="text"  className="border rounded-[25px] px-3 py-2" />
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
                {initialstatus === "Yes" ? (
                  <></>
                ) : (
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
                )}

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
