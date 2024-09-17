import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

//SPA: Single Page Aplication
// CSR = Renderizado del lado del cliente (client side rendering)
// SSR = Remderizado del lado del servidor (server side rendering)

// React router: es una librería de enrutamiento para react
// Nos permite navegar entre componentes sin tener que recargar la aplicación

//Cómo la usamos?
//1) Instalamos : npm-install react-router-dom
//2) importamos en nuestra app los siguientes componentes en la libreria
//BrowserRouter. Route, Routes

//BrowserRoutes: Es un componenente que envuelve nuestra aplicación y habilita la navegación
//Routes: Define las rutas de navegación
//Route: define una ruta en particular

//EVENTOS

/*En JS vainilla usamos eventos como:

1) addEventListener

const btnPrincipal = document.getElementById("btn")

btn.addEventListener("click",()=>{
  ls función que queriamos realizar})

  2) Propiedades de los nodos

  const tituloPrincipal = document.getElementById("titulo")

  tituloPrincipal.onMouseMove = (aca matiamos la funcion con el comportamiento buscado)
  
  3)Era como atributode las etiquetas HTML. */
