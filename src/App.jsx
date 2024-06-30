import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import { createContext, useEffect } from "react";
import useData from "./hooks/useData";

export const Products = createContext();

function App() {
  const { data, loading, error } = useData();

  const router = createBrowserRouter(routes);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Products.Provider value={[data, loading, error]}>
      <RouterProvider router={router} />
    </Products.Provider>
  );
}

export default App;
