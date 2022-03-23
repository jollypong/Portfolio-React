import React from "react";
import "./header.css";
import HeaderButton from "./headerButton";
import Profile from "../../assets/images/profilepic.png";
import ArrowDown from "../../assets/images/arrow-down.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
          <h4>Hello, my name is</h4>
          <h1>Joe Lee</h1>
          <h4 className="text-light">I'm a Fullstack Developer</h4>
          <HeaderButton/>
          <Socials/> 
          <div className='profilePicture'> 
            <img src = {Profile} alt = ""/>
          </div>
          <a href='#about' className='scroll_down'><img src = {ArrowDown} alt= ""/></a>
      </div>
    </header>
  );
};

export default Header;