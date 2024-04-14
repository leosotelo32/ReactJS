export const Counter = () => {
  const [contador, setContador] = useState(0);

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
    <div>
      <button onClick={restar}>restar</button>
      <h2>0</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};
