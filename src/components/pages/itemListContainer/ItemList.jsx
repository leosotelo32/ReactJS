import { ProductCard } from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(({ id, title, description, price, img }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            img={img}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
