import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import { createContext, useEffect, useState } from "react";
import useData from "./hooks/useData";

export const Products = createContext();
export const Cart = createContext();

function App() {
  const { data, loading, error } = useData();
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter(routes);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Products.Provider value={[data, loading, error]}>
      <Cart.Provider value={[cart, setCart]}>
        <RouterProvider router={router} />
      </Cart.Provider>
    </Products.Provider>
  );
}

export default App;
