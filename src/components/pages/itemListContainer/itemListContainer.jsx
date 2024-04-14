import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemListContainer = () => {
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

      <ProductCard
        precio={100}
        titulo={"Titulo 1"}
        descripcion={"descripcion 1"}
      />

      <ProductCard
        precio={200}
        titulo={"Titulo 2"}
        descripcion={"descripcion 2"}
      />

      <ProductCard
        precio={300}
        titulo={"Titulo 2"}
        descripcion={"descripcion 2"}
      />
    </div>
  );
};
