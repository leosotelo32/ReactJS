import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedorItem">
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>{id}</h3>
      <img src={img} alt={nombre} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        possimus nihil facere rerum vel, itaque maxime eaque provident excepturi
        voluptatum quo blanditiis nulla. Asperiores modi quasi, suscipit enim
        distinctio expedita.
      </p>
    </div>
  );
};

export default ItemDetail;
