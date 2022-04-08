import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./contact.scss";

function Contact() {
     const formik = useFormik({
          initialValues: {
               name: "",
               email: "",
               phone: "",
               message: "",
          },
          validationSchema: Yup.object({
               name: Yup.string()
                    .required("Required")
                    .min(4, "must be 4 character or more"),
               email: Yup.string()
                    .required("Required")
                    .matches(
                         //eslint-disable-next-line
                         /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                         "Please enter a valid email address"
                    ),
               message: Yup.string()
                    .required("Required")
                    .min(8, "must be 8 character or more"),
               phone: Yup.string()
                    .required("Required")
                    .matches(
                         //eslint-disable-next-line
                         /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                         "Must be a valid phone number"
                    ),
          }),
          onSubmit: (values) => {
               console.log(values);
          },
     });

     return (
          <div className="contact mt-5">
               <div className="container">
                    <div className="row">
                         <div className="col-md-6">
                              <h4 className="mb-4">Contact</h4>
                              <table className="table">
                                   <tbody>
                                        <tr>
                                             <td>Email</td>
                                             <td>nhnam190799@gmail.com</td>
                                        </tr>
                                        <tr>
                                             <td>Phone</td>
                                             <td>0386855896</td>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>
                         <div className="col-md-6">
                              <h4 className="mb-4">Your message</h4>
                              <form
                                   className="form-message"
                                   onSubmit={formik.handleSubmit}
                              >
                                   <div className="mb-3">
                                        <label
                                             htmlFor="exampleFormControlInput1"
                                             className="form-label"
                                        >
                                             Full Name
                                        </label>
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="exampleFormControlInput1"
                                             placeholder="Your name"
                                             name="name"
                                             value={formik.values.name}
                                             onChange={formik.handleChange}
                                        />
                                        {formik.errors.name && (
                                             <p className="errmsg">
                                                  {formik.errors.name}
                                             </p>
                                        )}
                                   </div>
                                   <div className="mb-3">
                                        <label
                                             htmlFor="exampleFormControlInput2"
                                             className="form-label"
                                        >
                                             Email
                                        </label>
                                        <input
                                             type="email"
                                             className="form-control"
                                             id="exampleFormControlInput2"
                                             placeholder="name@example.com"
                                             name="email"
                                             value={formik.values.email}
                                             onChange={formik.handleChange}
                                        />
                                        {formik.errors.email && (
                                             <p className="errmsg">
                                                  {formik.errors.email}
                                             </p>
                                        )}
                                   </div>
                                   <div className="mb-3">
                                        <label
                                             htmlFor="exampleFormControlInput4"
                                             className="form-label"
                                        >
                                             Phone
                                        </label>
                                        <input
                                             type="tel"
                                             className="form-control"
                                             id="exampleFormControlInput2"
                                             placeholder="123-45-678"
                                             name="phone"
                                             value={formik.values.phone}
                                             onChange={formik.handleChange}
                                        />
                                   </div>
                                   {formik.errors.phone && (
                                        <p className="errmsg">
                                             {formik.errors.phone}
                                        </p>
                                   )}
                                   <div className="mb-3">
                                        <label
                                             htmlFor="exampleFormControlInput3"
                                             className="form-label"
                                        >
                                             Message
                                        </label>
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="exampleFormControlInput3"
                                             placeholder="Mesage"
                                             name="message"
                                             value={formik.values.message}
                                             onChange={formik.handleChange}
                                        />
                                        {formik.errors.message && (
                                             <p className="errmsg">
                                                  {formik.errors.message}
                                             </p>
                                        )}
                                   </div>

                                   <button
                                        type="submit"
                                        className="btn btn-outline-dark"
                                   >
                                        Submit
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Contact;
