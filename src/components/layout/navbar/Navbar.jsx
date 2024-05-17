import CartWidget from "../../common/cartWidget/CartWidget.jsx";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <li to="/" style={{ color: "beige" }}>
            Studio A.M.
          </li>
          <ul className="categories">
            <li to="/">Todas</li>
            <li to="/category/facial">Faciales</li>
            <li to="/category/corporal">Corporales</li>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
