import React from "react";
import "./header.css";
import HeaderButton from "./headerButton"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello, my name is</h5>
          <h1>Joe Lee</h1>
          <h5 className="text-light">I'm a Fullstack Developer</h5>
          <HeaderButton/>
      </div>
    </header>
  );
};

export default Header;