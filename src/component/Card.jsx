import { useContext } from "react";
import { Cart } from "../App";

function Card({ product }) {
  const [cart, setCart] = useContext(Cart);

  const truncate = (str = "", limit) => {
    if (str.length <= limit) return str;

    return str.substring(0, limit) + "...";
  };

  //   const addToCart = (newItem) => {
  //     setCart([...cart, newItem]);
  //   };

  const handleClick = (product) => {
    const pastCart = [...cart];
    const found = pastCart.find((item) => item.id === product.id);

    if (found) {
      const index = pastCart.findIndex((item) => item.id === product.id);

      pastCart[index].quantity
        ? pastCart[index].quantity++
        : (pastCart[index].quantity = 2);

      setCart([...pastCart]);
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="flex flex-col justify-between border-2 mx-auto duration-200 p-5 rounded-md gap-5">
      <div className="group overflow-hidden">
        <img
          className="group-hover:scale-150 duration-1000 w-64 aspect-square object-contain"
          src={product.image}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-between pt-5 gap-3">
        <span className="text-sm">{truncate(product.title, 50)}</span>
        <span className="text-purple-600 text-xl font-bold">
          ${product.price}
        </span>
        <button
          onClick={() => handleClick(product)}
          className="hover:bg-purple-700 duration-200 bg-purple-600 text-center text-white p-2 rounded-md"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
