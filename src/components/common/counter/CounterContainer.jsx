import { useState } from "react";
import { useEffect } from "react";

export const CounterContainer = () => {
  //Hook del contador

  const [contador, setContador] = useState(0);

  //Array de dependencias

  useEffect(() => {
    console.log("me ejecuto dentro del effect");
  }, [contador]);

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

  return (
    <CounterPresentacional
      restar={restar}
      sumar={sumar}
      contador={contador}
      setNombre={setNombre}
    />
  );
};
