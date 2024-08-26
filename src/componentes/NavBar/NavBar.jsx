import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <img className="ImgHeader" src="../img/logov5.png" alt="hola" />
      <h1>Tienda A.M</h1>
      <nav>
        <ul>
          <li>Pestañas</li>
          <li>Cejas</li>
          <li>Depi</li>
          <li>HIFU</li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
