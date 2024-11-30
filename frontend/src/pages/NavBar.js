import React from "react";
import logo from "../image/logo.png";
import "../style/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img id="logo" src={logo} alt="Лого" />
      </a>
      <a className="text-model" href="/model">
        Model
      </a>
    </div>
  );
};

export default NavBar;

