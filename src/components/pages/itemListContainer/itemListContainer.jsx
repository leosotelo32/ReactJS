import { useState } from "react";
import { products } from "../../../productsMock";
import { useEffect } from "react";

const ItemListContainer = () => {
  const [items] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;

      if (x) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject({ status: 400, message: "Algo salio mal" });
      }
    });

    getProducts
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
