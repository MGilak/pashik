import MainPage from "./pages/MainPage";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/all-products", element: <AllProducts /> },
  { path: "/single-product", element: <SingleProduct /> },
  { path: "/cart", element: <Cart /> },
];

export default routes;
