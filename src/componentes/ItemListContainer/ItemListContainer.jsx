import React from "react";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asynmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;
    funcionProductos(idCategoria).then((res) => setProductos(res));
  }, [idCategoria]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis productos</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
//LÓGICA DEL CONTENEDOR
