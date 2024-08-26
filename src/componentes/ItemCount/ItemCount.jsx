import React from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <button onClick={incrementar}> + </button>
      <p> {contador}</p>
      <button onClick={decrementar}> - </button>
    </div>
  );
};

export default ItemCount;
