/*import React from "react";
import { useState, useEffect } from "react";

const JsonPlaceHolder = () => {
  const [usuarios, setUsuario] = [];*/
//Opcion 1: usamos fetc
/*fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(res => setUsuario(res))
    .catch(error => console.log(error);) */

//Opcion 2: Podemos usar Async Await:
//Si quiero trabajar Async y await en lugar de then y catch tengo que realizar lo siguiente
//Puedo usar try y catch que me permite manejar errores. Si alguno dentro del try falla, el codigo continua con el catch
/*useEffect(() => {
    try {
      const pedirUsaurios = async () => {
        const respuesta = await fetch(
          "ttps://jsonplaceholder.typicode.com/users"
        );
        const data = await respuesta.json();
        setUsuario(data);
      };
      pedirUsaurios();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2>Usuarios de Json Place Holder</h2>
      <ul>
        {usuarios.map((usuario) => {
          return <li key={usuario.id}>{usuario.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default JsonPlaceHolder; */
