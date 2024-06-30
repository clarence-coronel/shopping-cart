import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import { createContext } from "react";

export const Products = createContext();

function App() {
  const router = createBrowserRouter(routes);

  return (
    <Products.Provider>
      <RouterProvider router={router} />
    </Products.Provider>
  );
}

export default App;
