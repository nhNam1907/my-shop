import React from "react";

function Login() {
     const handleShowPassword = () => {
          const x = document.getElementById("exampleInputPassword1");
          if (x.type === "password") {
               x.type = "text";
          } else {
               x.type = "password";
          }
     };
     return (
          <div className="container mt-5">
               <div className="row justify-content-center">
                    <div className="col-md-6">
                         <form>
                              <div className="form-group">
                                   <label htmlFor="exampleInputEmail1">
                                        Email
                                   </label>
                                   <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                   />
                              </div>
                              <div className="form-group">
                                   <label htmlFor="exampleInputPassword1">
                                        Password
                                   </label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                   />
                              </div>
                              <div className="form-group form-check mt-2">
                                   <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        onClick={handleShowPassword}
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

export default Login;
