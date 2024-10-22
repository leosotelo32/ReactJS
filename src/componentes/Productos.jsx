import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/config";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const misProductos = query(collection(db, "inventario"));

    getDocs(misProductos).then((respuesta) => {
      setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data })));
    });
  }, [productos]);

  const descontarStock = async (producto) => {
    const productoRef = doc(db, "inventario", producto.id);
    const nuevoStock = producto.stock - 1;

    await updateDoc(productoRef, { stock: nuevoStock });
  };
  return (
    <>
      <h2>Mis productos desde Firebase</h2>
      <div>
        {productos.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio:{producto.precio}</p>
            <p>Stock:{producto.stock}</p>
            <button onClick={() => descontarStock(producto)}>Comprar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productos;
