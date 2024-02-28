import React from "react";
import meals from "../Images/Meals1.avif";
import "../Layout/Header.css";
import Headercart from "./HeaderCart";
import Paragraph from "../Summary/Summary";
const Header = (props) => {
  return (
    <>
      <header className="Header-things">
        <h1>Restaurent</h1>
        <Headercart />
      </header>

      <div>
        <img src={meals} alt="Food-items" className="Meals1"></img>
        <Paragraph />
      </div>
     
    </>
  );
};
export default Header;
