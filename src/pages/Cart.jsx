import { useContext } from "react";
import { Cart as CartData } from "../App";

function Cart() {
  const [cart, addToCart] = useContext(CartData);

  return (
    <div className="">
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} - {item.quantity}
        </div>
      ))}
    </div>
  );
}

export default Cart;
