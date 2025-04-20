import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPages from "./pages/CoursesPages";
import AboutUsPage from "./pages/AboutUsPage";
import PageNotFound from "./pages/404";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Programmers from "./components/Programmers";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/courses" element={<CoursesPages />} />
      <Route path="/landing" element={<Navigate to="/" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/about-us" element={<AboutUsPage />}>
        <Route path="programmers" element={<Programmers />} />
        <Route path="users" element={<div>users</div>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
