import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CartContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
  };
  const item = { id, nombre, precio, img, descripcion };

  agregarAlCarrito(item, cantidad);

  return (
    <div className="contenedorItem">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <h4>${precio}</h4>
      <p>ID: {id}</p>
      <p>{descripcion}</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar compra</Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
