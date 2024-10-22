import React from "react";

//Programación sincrónica y asincrónica
//La programación sincrónica se va ejecutando una tarea a la vez, em prdem secuencial. Cada proceso es bloqueante del siguiente
//La programación Asincónica ejecuta varias tareas al mismo tiempo, en orden no secuencial.
//Promesas es un objeto que representa un evento futuro
//En general este evento futuro es el resultado de una petición asincrónica
//

const Promesas = () => {
  console.log("Tarea 1");
  console.log("Tarea 2");

  //Programación asincrónica:
  setTimeout(() => {
    console.log("tarea a");
  }, 3000);
};
setTimeout(() => {
  console.log("tarea b");
}, 1500);

//Promesas:

const falsasPromesas = () => {
  return new Promise((resolve, reject) => {
    if (estado) {
      resolve("promesa cumplida me llegó la play 5");
    } else {
      reject("promesa rechazada me llego carbon");
    }
  });
};

//THEN Y CATCH:
//Podemos concatenar dos métodos que me permiten ejecutar una función cuando la promesa se cumple o se rechaza
//El then se ejecuta cuando la promesa se cumple
//El catch se ejecuta cuando la promesa se rechaza
//Finally se ejecuta siempre0

falsasPromesas(false)
  .then((respuesta) => {
    console.log("Si se cumplió" + respuesta);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Proceso terminado"));

return <div>Promesas</div>;

export default Promesas;
