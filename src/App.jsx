import { useState } from "react";
import { Footer } from "./components/layout/footer/Footer.jsx";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { Counter } from "./components/common/counter/Counter.jsx";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer />
        <Counter />
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
