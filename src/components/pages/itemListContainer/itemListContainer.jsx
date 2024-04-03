import "../itemListContainer/itemListContainer.css";

export const itemListContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        backgroundColor: "steelblue",
      }}
    >
      <h1>Bienvenidos a mi ecommerce</h1>

      <div>
        <h3>Titulo 1</h3>
        <h4>Descripcion</h4>
        <h4>Precio 1</h4>
      </div>
      <div>
        <h3>Titulo 2</h3>
        <h4>Descripcion</h4>
        <h4>Precio 2</h4>
      </div>
      <div>
        <h3>Titulo 3</h3>
        <h4>Descripcion</h4>
        <h4>Precio 3</h4>
      </div>
    </div>
  );
};
