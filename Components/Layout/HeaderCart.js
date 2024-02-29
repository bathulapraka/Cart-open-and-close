import React from "react";
import Cart from "../CartIcon/CartSVG";
import "../Layout/Header.css";

const Headercart = (props) => { 
  return (
    <button className="Cart-icon" onClick={props.onClick}>
      <span className="svg-cart">
        <Cart />
      </span>
      <span className="name-cart">Your Cart</span>
      <span className="items">0</span>
    </button>
  );
};

export default Headercart;
