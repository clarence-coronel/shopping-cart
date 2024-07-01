function cartReducer(cart, action) {
  const index = cart.findIndex((item) => item.id === action.product.id);

  switch (action.type) {
    case "incremented": {
      const tempCart = [...cart];
      tempCart[index] = {
        ...tempCart[index],
        quantity: (tempCart[index].quantity || 0) + 1,
      };
      return tempCart;
    }

    case "decremented": {
      const tempCart = [...cart];

      if (tempCart[index].quantity == 1) {
        return tempCart.filter((product) => product.id !== tempCart[index].id);
      }

      tempCart[index] = {
        ...tempCart[index],
        quantity: tempCart[index].quantity - 1,
      };

      return tempCart;
    }

    case "added": {
      return [...cart, { ...action.product, quantity: 1 }];
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default cartReducer;
