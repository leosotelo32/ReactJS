import React from "react";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
/*import { getProductos, getProductosPorCategoria } from "../../asynmock";*/
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "--", idCategoria))
      : collection(db, "productos");
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error))
      .finally("proceso finalizado");
  }, [idCategoria]);

  /*  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;
    funcionProductos(idCategoria).then((res) => setProductos(res));
  }, [idCategoria]);
*/
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis productos</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
//LÓGICA DEL CONTENEDOR
