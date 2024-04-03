import { Footer } from "./components/layout/footer/Footer.jsx";
import { Home } from "./components/pages/home/Home.jsx";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { itemListContainer } from "./components/pages/itemListContainer/itemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <itemListContainer />
      <Footer />
    </div>
  );
}

export default App;
