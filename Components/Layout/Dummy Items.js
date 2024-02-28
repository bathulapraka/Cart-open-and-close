import React from "react";
import "../Layout/Header.css"
const Dummy = (props) => {
  const Arr = [
    {
      name: "Sushi",
      item: "Finest Fish and veggies",
      value: "$22.08",
    },
    {
      name: "Burger",
      item: "Juicy beef patty with chinese",
      value: "$20.05",
    },
    {
      name: "pizza",
      item: "Deliciious combination of toppings",
      value: "$18.95",
    },
    {
      name: "Green Bowl",
      item: "Healthy...and green",
      value: "$100.04",
    },
  ];
  return (
    <div className="All" >
      <div  className="All-dummy-items">
        {Arr.map((item, index) => (
          <li key={index} className="data">
            <h2>{item.name}</h2>
            <p>{item.item}</p>
            <h2 className="Amount">{item.value}</h2>
          </li>
        ))}
        
      </div>
    </div>
  );
};
export default Dummy;
