import NavigationLink from "./NavigationLink";
import { useContext, useEffect, useState } from "react";
import { Cart } from "../App";

function Header() {
  const [cart, setCart] = useContext(Cart);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let quantity = 0;

    cart.forEach((item) => {
      if (item.quantity) quantity += item.quantity;
      else quantity++;
    });

    setQuantity(quantity);
  }, [cart]);

  return (
    <header className="max-md:justify-between max-md:gap-3 w-full border-b-2 flex justify-around items-center gap-5 p-4">
      <div className="max-md:hidden flex flex-col">
        <span className="text-2xl font-semibold text-purple-600">
          Fake Store
        </span>
        <span className="font-semibold italic text-sm">
          #1 Trusted Fake Store
        </span>
      </div>

      {/* Main Nav */}
      <nav className="space-x-8">
        <NavigationLink to="/" text="Home" />
        <NavigationLink to="/shop" text="Shop" />
      </nav>

      {/* Cart Nav */}
      <NavigationLink to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
          />
        </svg>

        <span className="w-6 h-6 text-sm flex justify-center items-center text-white absolute -right-3 -top-3 bg-red-400 aspect-square p-1 rounded-full">
          {quantity}
        </span>
      </NavigationLink>
    </header>
  );
}

export default Header;
