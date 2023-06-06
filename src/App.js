import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./context/CartProvider";
import SingleProductProvider from "./context/SingleProductProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="bg__dark">
      <CartProvider>
        <SingleProductProvider>
          {router}
          <ToastContainer />
        </SingleProductProvider>
      </CartProvider>
    </div>
  );
}

export default App;
