import { CounterContainer } from "./CounterContainer";

export const CounterPresentacional = () => {
  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>0</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};
