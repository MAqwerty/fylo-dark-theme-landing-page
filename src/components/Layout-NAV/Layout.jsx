import React from "react";
import "./Layout.css"
import Logo from "../../assets/svg/logo.svg"
import { Link } from "react-router-dom";

function Layout (){

  return (
    <>  
      <nav className="PC-NAV" id="PC-NAV">
        <img src={Logo} className="LOGO-img" alt="" />
        <ul className="PC-ul">
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/" id="PC-Home">Home</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/Features">Features</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/Team">Team</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/SignIn">SignIn</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Layout;