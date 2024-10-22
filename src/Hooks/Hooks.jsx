import { useContador } from "../custom-hooks/useContador";
import React from "react";

import { useFetch } from "../custom-hooks/useFetch";

const Hooks = () => {
  const { contador, incrementar, decrementar } = useContador(1, 10);

  const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2>Contador con custom Hooks:</h2>
      <button onClick={incrementar}>Sumar</button>
      <strong>{contador}</strong>
      <button onClick={decrementar}>estar</button>

      <hr />

      <h2>Fetch de Datos</h2>

      {data && data.map((usuario) => <p key={usuario.id}>{usuario.name}</p>)}
    </div>
  );
};
export default Hooks;
