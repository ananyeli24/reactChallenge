import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Product</Link>
           </ul>
        </div>
  );

}