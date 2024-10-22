import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7ts-4K7WcpTzF5OSevDAhIOHLJx4oYgc",
  authDomain: "studioam-9293b.firebaseapp.com",
  projectId: "studioam-9293b",
  storageBucket: "studioam-9293b.appspot.com",
  messagingSenderId: "906016298025",
  appId: "1:906016298025:web:df31de4b1d46915d92b838",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
/*
export const misProductos = [
  {
    id: "1",
    nombre: "Pestañas",
    stock: 10,
    precio: 15000,
    img: "../img/PXP.jpg",
    idCat: "Faciales",
    descripcion: "Realza tu mirada con un efecto natural y duradero.",
  },
  {
    id: "2",
    nombre: "Cejas",
    stock: 10,
    precio: 10000,
    img: "../img/cejas.jpg",
    idCat: "Faciales",
    descripcion: "Dale más presencia a tu mirada",
  },
  {
    id: "3",
    nombre: "HIFU 12D",
    stock: 10,
    precio: 30000,
    img: "../img/hifu7d.jpg",
    idCat: "Corporales",
    descripcion: "Rejuvenece hasta 10 años sin cirugía",
  },
  {
    id: "4",
    nombre: "Depilación Láser",
    stock: 10,
    precio: 45000,
    img: "../img/depi-laser.jpg",
    idCat: "Corporales",
    descripcion:
      "Depilación láser: Experimenta la suavidad duradera con nuestra tecnología láser de última generación.",
  },
];

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
  const batch = writeBatch(db);
  const productosRef = collection(db, "productos");

  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef);
    batch.set(nuevoDoc, producto);
  });
  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.log("Error al cargar el producto", error);
  }
};

subirProductos();
*/
