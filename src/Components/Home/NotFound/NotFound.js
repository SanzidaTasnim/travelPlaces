import React from "react";
import Nav from "../Nav/Nav";
import logo from "./../../../images/logo-black.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFoundStyle">
      <Nav color="black" img={logo} />
    </div>
  );
};

export default NotFound;
