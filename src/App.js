import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./context/CartProvider";
import SingleProductProvider from "./context/SingleProductProvider";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="bg__dark">
      <CartProvider>
        <SingleProductProvider>{router}</SingleProductProvider>
      </CartProvider>
    </div>
  );
}

export default App;
