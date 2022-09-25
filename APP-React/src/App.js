import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseScreen from "./screens/BaseScreen";
import Home from "./screens/Home";
import Register from "./screens/Register";
import PageNotFound from "./screens/PageNotFound";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";
import ScrollToTop from "./components/animations/ScrollToTop";
import ProductDetailScreen from "./screens/ProductDetailScreen";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<Home />} />
          <Route path="/categorie/:id" element={<CategoryDetailScreen />} />
          <Route path="/categorie/:id/detail/:id" element={<ProductDetailScreen />} />
          <Route path="/connexion" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
