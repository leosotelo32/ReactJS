import { useState } from "react";
import { useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";
import { ItemListContainer } from "../../pages/itemListContainer/itemListContainer";

export const CounterContainer = () => {
  //Hook del contador

  const [contador, setContador] = useState(0);

  //Array de dependencias

  const [nombre, setNombre] = useState("pepe");

  useEffect(() => {
    console.log("me ejecuto dentro del effect");
  }, [nombre]);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("no podes menos de 1");
    }
  };

  console.log(nombre);

  return (
    <CounterPresentacional
      restar={restar}
      sumar={sumar}
      contador={contador}
      setNombre={setNombre}
    />
  );
};
