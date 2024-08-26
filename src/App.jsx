import React from "react";
import "./App.css";
import NavBar from "./componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Mis productos" />
    </>
  );
};
export default App;
