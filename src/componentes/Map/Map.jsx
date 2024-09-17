import React from "react";

//Método map
//En react lo utilizamos generalmente para crear una lista de componentes a partir de un array de datos

const Map = () => {
  const productos = [
    { id: 1, nombre: "Pc Gamer", precio: 1000000 },
    { id: 2, nombre: "Teclado", precio: 4000000 },
    { id: 3, nombre: "Mouse", precio: 3000000 },
    { id: 4, nombre: "Silla", precio: 2000000 },
  ];

  return (
    <div>
      <h2>Productos gamer:</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <span>{producto.nombre}</span>
            <span>{producto.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
