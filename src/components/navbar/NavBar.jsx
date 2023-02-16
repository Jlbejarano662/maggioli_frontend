import React, { useState } from "react";
//import components BurguerButton and hooks
import BurgerButton from "../burgerButton/BurgerButton";
//import css
import "./NavBar.css";

const Navbar = () => {
  //hook initial in false
  const [clicked, setClicked] = useState(false);

  //change to click denied form
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <header>
        <div className="logo">
          <h2>MAGGIOLI APP</h2>
        </div>
        {/* concatenate with the condition if the status is true it is assigned the active class  */}
        <div className={`links ${clicked ? "active" : ""}`}>
          {/* event to hide the menu */}
          <a onClick={handleClick} className="border"  href="/">
            Companies list
          </a>
          <a onClick={handleClick} className="border" href="/add">
            Add company
          </a>
        </div>
        <div className="burger">
          {/* change state button */}
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        {/* background Menu with the condition if the status is true it is assigned the active class */}
        <div className={`initial ${clicked ? "active" : ""}`}></div>
      </header>
    </>
  );
};

export default Navbar;
