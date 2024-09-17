const misProductos = [
  {
    id: "1",
    nombre: "Pestañas",
    precio: 500,
    img: "../img/PXP.jpg",
    idCat: "Faciales",
  },
  {
    id: "2",
    nombre: "HIFU 7D",
    precio: 200,
    img: "../img/hifu7d.jpg",
    idCat: "Corporales",
  },
  {
    id: "3",
    nombre: "DEPI",
    precio: 300,
    img: "../img/depi-laser.jpg",
    idCat: "Aparatos",
  },
  {
    id: "4",
    nombre: "Cejas",
    precio: 1000,
    img: "../img/cejas.jpg",
    idCat: "Faciales",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
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
