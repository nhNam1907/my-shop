import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../../redux/cartslice";

function Cart() {
     const state = useSelector((state) => state.cart);
     const dispatch = useDispatch();

     const handleAdd = (payload) => {
          dispatch(addCart(payload));
     };
     const handleDel = (payload) => {
          dispatch(deleteCart(payload));
     };

     const emptyCart = () => {
          return (
               <>
                    <div className="px-4 my-5 bg-light rounded-3 py-5">
                         <div className="container py-4">
                              <div className="row">
                                   <h3>Your Cart is Empty</h3>
                              </div>
                         </div>
                    </div>
               </>
          );
     };
     const cartItems = (product) => {
          return (
               <div className="px-4 my-5 bg-light rounded-3 py-5">
                    <div className="container py-4">
                         <div className="row justify-content-center">
                              <div className="col-md-4">
                                   <img
                                        src={product.image}
                                        alt={product.title}
                                        height="200px"
                                        width="180px"
                                   />
                              </div>
                              <div className="col-md-4">
                                   <h3>{product.title}</h3>
                                   <p className="lead fw-bold">
                                        {product.qty} X ${product.price} = $
                                        {product.qty * product.price}
                                   </p>
                                   <button
                                        className="btn btn-outline-dark me-4"
                                        onClick={() => handleDel(product)}
                                   >
                                        <i className="fa fa-minus"></i>
                                   </button>
                                   <button
                                        className="btn btn-outline-dark"
                                        onClick={() => handleAdd(product)}
                                   >
                                        <i className="fa fa-plus"></i>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          );
     };
     const Bill = () => {
          let sum;
          sum = state.reduce((res, item) => {
               return res + item.price * item.qty;
          }, 0);
          console.log(sum);
          return (
               <>
                    <div className="container">
                         <div className="row d-flex text-center">
                              <h5>Sum: ${sum}</h5>
                         </div>
                    </div>
               </>
          );
     };

     return (
          <div>
               <Outlet />
               {state.length === 0 && emptyCart()}
               {state.length !== 0 && state.map(cartItems)}
               {state.length !== 0 && Bill()}
          </div>
     );
}

export default Cart;
