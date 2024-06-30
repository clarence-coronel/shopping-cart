import { useContext, useEffect, useState } from "react";
import { Cart as CartData } from "../App";
import CartItem from "../component/CartItem";

function Cart() {
  const [cart, setCart] = useContext(CartData);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempTotal = 0;

    cart.forEach((product) => {
      let quantity = parseInt(product.quantity ? product.quantity : 1);
      let price = parseFloat(product.price);
      let totalProductPrice = quantity * price;

      tempTotal += totalProductPrice;

      // alert("updated");
    });

    setTotal(tempTotal);
  }, [cart]);

  if (cart.length === 0)
    return (
      <div className="text-2xl font-semibold w-full max-w-[1400px] mx-auto p-10 flex justify-center items-center">
        Cart is empty...
      </div>
    );

  return (
    <div className="divide-y-2 w-full max-w-[1400px] mx-auto p-10">
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}

      <div className="p-5 flex justify-end items-center gap-5">
        Total: ${total}
        <button className="hover:bg-green-600 p-2 bg-green-500 text-white rounded-md duration-200">
          Proceed
        </button>
      </div>
    </div>
  );
}

export default Cart;
