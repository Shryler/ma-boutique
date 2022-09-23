import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import BaseScreen from "./screens/BaseScreen";
import Home from "./screens/Home";
import Register from "./screens/Register";
import PageNotFound from "./screens/PageNotFound";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";
=======
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
>>>>>>> 479cdf03e2e405e92c5af87b499cb06cfc039c70

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<Home />} />
          <Route path="/categorie/:id" element={<CategoryDetailScreen />} />
          <Route path="/connexion" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
