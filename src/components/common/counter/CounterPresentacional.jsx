  const CounterPresentacional = ({restar, sumar, contador, setNombre}){

  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>0</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};

export default CounterPresentacional;