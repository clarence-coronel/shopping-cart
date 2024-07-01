import { useContext, useEffect, useState } from "react";
import { Cart as CartData } from "../App";

function CartItem({ product }) {
  const [cart, setCart] = useContext(CartData);
  const [quantity, setQuantity] = useState(
    product.quantity ? product.quantity : 1
  );
  const [totalPrice, setTotalPrice] = useState(
    parseFloat(product.quantity ? product.quantity : 1) *
      parseFloat(product.price)
  );

  const index = cart.findIndex((item) => item.id === product.id);

  useEffect(() => {
    setTotalPrice(
      parseFloat(product.quantity ? product.quantity : 1) *
        parseFloat(product.price)
    );
  }, [cart]);

  const truncate = (str = "", limit) => {
    if (str.length <= limit) return str;

    return str.substring(0, limit) + "...";
  };

  const decrease = () => {
    if (quantity == 1) {
      const tempCart = cart.filter((item) => item.id !== product.id);

      setCart(tempCart);
    } else {
      const tempCart = [...cart];

      tempCart[index].quantity -= 1;

      setQuantity(quantity - 1);
      setCart([...tempCart]);
    }
  };

  const increase = () => {
    if (quantity == 9) {
      alert("Max Item Quantity Reached.");
      return;
    } else {
      const tempCart = [...cart];

      tempCart[index].quantity += 1;
      setQuantity(quantity + 1);

      setCart([...tempCart]);
    }
  };

  //   const handleInputChange = (e) => {
  //     const tempCart = [...cart];

  //     if (isNaN(e.target.value)) {
  //       setQuantity(1);
  //       tempCart[index].quantity = 1;

  //       setCart([...tempCart]);
  //       return;
  //     }

  //     if (parseInt(e.target.value) > 9) {
  //       setQuantity(9);
  //       tempCart[index].quantity = 9;

  //       setCart([...tempCart]);
  //       return;
  //     }

  //     setQuantity(e.target.value);
  //     tempCart[index].quantity = e.target.value;
  //     setCart([...tempCart]);
  //   };

  //   const handleInputBlur = (e) => {
  //     const tempCart = [...cart];

  //     if (isNaN(e.target.value) || !e.target.value) {
  //       setQuantity(1);
  //       tempCart[index].quantity = 1;

  //       setCart([...tempCart]);
  //       return;
  //     }
  //   };

  return (
    <div className="flex gap-5 justify-between items-center p-5">
      <div className="flex gap-5 items-center justify-start">
        <img
          className="w-20 h-20 border-2 aspect-square rounded-sm"
          src={product.image}
          alt={product.title}
        />
        <span title={product.title}>{truncate(product.title, 50)}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="p-2 flex gap-5 items-center border-purple-600">
          {/* Decrease item quantity btn*/}
          <button
            onClick={() => decrease()}
            className="text-xl font-bold rounded-md flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"
              />
            </svg>
          </button>
          {/* Quantity */}
          {/* <input
              className="focus:outline-purple-600 text-center p-2 border-2 aspect-square w-10 h-10 flex justify-center items-center rounded-sm bg-white"
              value={quantity}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            /> */}
          <span className="focus:outline-purple-600 text-center p-2 border-2 aspect-square w-10 h-10 flex justify-center items-center rounded-sm bg-white">
            {quantity}
          </span>
          {/* Increase item quantity btn */}
          <button
            onClick={() => increase()}
            className="text-xl font-bold rounded-md flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
              />
            </svg>
          </button>
        </div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
}

export default CartItem;
