import { Footer } from "./components/layout/footer/Footer.jsx";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { CounterContainer } from "./components/common/counter/CounterPresentacional.jsx";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";

function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer />
        <CartContainer />
      </Navbar>
      <CounterContainer />
      <Footer />
    </div>
  );
}

export default App;
