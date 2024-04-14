import { IoCartOutline } from "react-icons/io5";

export const Navbar = ({ children }) => {
  return (
    <div>
      {children}
      <h3>aca el logo</h3>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contactos</li>
      </ul>

      <h3>Aca las cantidades</h3>
      <IoCartOutline color="peru" size="2rem" />
    </div>
  );
};
