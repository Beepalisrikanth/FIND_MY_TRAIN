import React, { useState } from "react";
import logo from "../../assets/logo.png";
import burger_menu from "../../assets/burger_menu.png";
import logo_title from "../../assets/logo_title.png";
import profile from "../../assets/profile.png"
import "./Navbar.css"

const Navbar = () => {
  const [searchElement,setSearchElement] = useState("")

  console.log(searchElement)

  const searchResult=(e)=>{
    setSearchElement(e.target.value) 
  }

  return (
    <div className="navBar">
      <div className="leftNavBar">
        <button className="menuButton">
          <img className="burgerMenu" src={burger_menu} alt="menu" />
        </button>
        <div className="logoSet">
            <img className="logoImg" src={logo} alt="logo"/>
            <img className="logoTitle" src={logo_title} alt="logo_title"/>
        </div>
      </div>

      <div className="rightNavBar">
        <input type="search" placeholder="search" value={searchElement} onChange={searchResult} />
        <h1>{searchElement}</h1>
        <button>
          <img src={profile} alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;