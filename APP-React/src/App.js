import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseScreen from "./screens/BaseScreen";
import Home from "./screens/Home";
import Register from "./screens/Register";
import PageNotFound from "./screens/PageNotFound";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";

function App() {
  return (
    <BrowserRouter>
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
