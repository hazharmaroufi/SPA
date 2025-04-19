import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPages from "./pages/CoursesPages";
import AboutUsPage from "./pages/AboutUsPage";
import PageNotFound from "./pages/404";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPages />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
