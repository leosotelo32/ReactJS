import { Layout } from "./components/layout/Layout.jsx";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer.jsx";

function App() {
  return (
    <div>
      <Layout>
        <ItemListContainer />
      </Layout>
    </div>
  );
}

export default App;
