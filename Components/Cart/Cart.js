import React from "react";
import Modal from "../UI/Cart Modal";
import "../Layout/Header.css"
const CartItems = (props) => {
  const arritems = (
    <ul>
      {[
        {
          name: "Sushi",
          amount: 2,
          price: 20.02,
          id: "h1",
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}  
    </ul>
  );
  return (
    <Modal>
      {arritems}
      <div >
        <span className="Total">Total Amount</span>
        <span>30.76</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};
export default CartItems;
