import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./register.scss";

function Register() {
     const formik = useFormik({
          initialValues: {
               email: "",
               name: "",
               password: "",
               confirmPassword: "",
          },
          validationSchema: Yup.object({
               name: Yup.string()
                    .required("Required")
                    .min(4, "Must be 4 characters or more"),
               email: Yup.string()
                    .required("Required")
                    .matches(
                         //eslint-disable-next-line
                         /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                         "Please enter a valid email address"
                    ),
               password: Yup.string()
                    .required("Required")
                    .matches(
                         /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                         "Password must be 7-19 characters and contain at least one letter, one number and a special character"
                    ),
               confirmPassword: Yup.string()
                    .required("Required")
                    .oneOf([Yup.ref("password"), null], "Password must match"),
          }),
          onSubmit: (values) => {
               window.alert("Form submitted");
               console.log(values);
          },
     });

     const handleShowPassRegister = () => {
          const password = document.getElementById("password");
          const confirmPassword = document.getElementById("confirmPassword");
          if (
               password.type === "password" &&
               confirmPassword.type === "password"
          ) {
               password.type = "text";
               confirmPassword.type = "text";
          } else {
               password.type = "password";
               confirmPassword.type = "password";
          }
     };

     return (
          <div className="container mt-5">
               <div className="row justify-content-center">
                    <div className="col-md-6">
                         <form onSubmit={formik.handleSubmit}>
                              <div className="form-group">
                                   <label htmlFor="name">Fullname</label>
                                   <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                   />
                                   {formik.errors.name && (
                                        <p className="errorMsg">
                                             {formik.errors.name}
                                        </p>
                                   )}
                              </div>
                              <div className="form-group">
                                   <label htmlFor="email">Email</label>
                                   <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                   />
                                   {formik.errors.email && (
                                        <p className="errorMsg">
                                             {formik.errors.email}
                                        </p>
                                   )}
                              </div>
                              <div className="form-group">
                                   <label htmlFor="password">Password</label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                   />
                                   {formik.errors.password && (
                                        <p className="errorMsg">
                                             {formik.errors.password}
                                        </p>
                                   )}
                              </div>
                              <div className="form-group">
                                   <label htmlFor="confirmPassword">
                                        Confirm password
                                   </label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                   />
                                   {formik.errors.confirmPassword && (
                                        <p className="errorMsg">
                                             {formik.errors.confirmPassword}
                                        </p>
                                   )}
                              </div>
                              <div className="form-group form-check mt-2">
                                   <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        onClick={handleShowPassRegister}
                                   />
                                   <label
                                        className="form-check-label"
                                        htmlFor="exampleCheck1"
                                   >
                                        Show password
                                   </label>
                              </div>
                              <button
                                   type="submit"
                                   className="btn btn-outline-dark mt-2"
                              >
                                   Submit
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
}

export default Register;
