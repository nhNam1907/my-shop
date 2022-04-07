import React from "react";
import bg from "../../assets/bg.jpg";
import Products from "../products/Products";
import "./home.scss";

function Home() {
     return (
          <div className="hero">
               <div className="card bg-dark text-white border-0">
                    <img
                         src={bg}
                         className="card-img hero-bg"
                         alt="Background"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                         <div className="container">
                              <h5 className="card-title display-3 fw-bold mb-0 hero-title">
                                   New Season arrivals
                              </h5>
                              <p className="card-text hero-text lead fs-2">
                                   Check out all the trends
                              </p>
                         </div>
                    </div>
               </div>
               <Products />
          </div>
     );
}

export default Home;
