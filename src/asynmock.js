/* const misProductos = [
  {
    id: "1",
    nombre: "Pestañas pelo por pelo",
    stock: 10,
    precio: 15000,
    img: "../img/PXP.jpg",
    idCat: "Faciales",
    descripcion: "Realza tu mirada con un efecto natural y duradero.",
  },
  {
    id: "2",
    nombre: "HIFU 7D",
    stock: 10,
    precio: 30000,
    img: "../img/hifu7d.jpg",
    idCat: "Corporales",
  },
  {
    id: "3",
    nombre: "Depilación Láser",
    stock: 10,
    precio: 45000,
    img: "../img/depi-laser.jpg",
    idCat: "Aparatos",
    descripcion:
      "Depilación láser: Experimenta la suavidad duradera con nuestra tecnología láser de última generación.",
  },
  {
    id: "4",
    nombre: "Cejas",
    stock: 10,
    precio: 10000,
    img: "../img/cejas.jpg",
    idCat: "Faciales",
  },
];
*/
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((item) => item.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.filter(
        (item) => item.idCat === idCategoria
      );
      resolve(producto);
    }, 100);
  });
};
