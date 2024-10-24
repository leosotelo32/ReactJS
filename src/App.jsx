import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Children } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={Children}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Mis servicios" />}
            />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>Sitio en construccion</h2>} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
};
export default App;
