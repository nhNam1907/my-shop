import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
     const state = useSelector((state) => state.cart);
     console.log(state);
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container">
                    <NavLink className="navbar-brand" to="/">
                         MONO CHROME
                    </NavLink>
                    <button
                         className="navbar-toggler"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#navbarSupportedContent"
                         aria-controls="navbarSupportedContent"
                         aria-expanded="false"
                         aria-label="Toggle navigation"
                    >
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                         className="collapse navbar-collapse"
                         id="navbarSupportedContent"
                    >
                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                              <li className="nav-item me-3">
                                   <NavLink
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/products"
                                   >
                                        Products
                                   </NavLink>
                              </li>
                              <li className="nav-item me-3">
                                   <NavLink className="nav-link" to="/about">
                                        About
                                   </NavLink>
                              </li>
                              <li className="nav-item me-3">
                                   <NavLink className="nav-link" to="/contact">
                                        Contact
                                   </NavLink>
                              </li>
                              <li className="nav-item me-3">
                                   <NavLink className="nav-link" to="/login">
                                        Login
                                   </NavLink>
                              </li>
                              <li className="nav-item me-3">
                                   <NavLink className="nav-link" to="/register">
                                        Register
                                   </NavLink>
                              </li>
                              <li className="nav-item me-3">
                                   <NavLink className="nav-link" to="/cart">
                                        Cart({state.length})
                                   </NavLink>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}

export default Navbar;
