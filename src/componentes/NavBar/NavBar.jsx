import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="ImgHeader" src="../img/logov5.png" alt="hola" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/"> HOME </Link>
          </li>
          <li>
            <NavLink to="categoria/Faciales"> FACIALES </NavLink>
          </li>

          <li>
            <NavLink to="categoria/Corporales">SKIN</NavLink>
          </li>

          <li>
            <NavLink to="categoria/Aparatos">APARATOS</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
