import { render, screen } from "@testing-library/react";
import CartItem from "../src/component/CartItem";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Cart } from "../src/App";

const product = {
  category: "men's clothing",
  description: "lorem ipsum",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  rating: {
    rate: 3.9,
    count: 120,
  },
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  quantity: 2,
};

const MockCartProvider = ({ children, cartValue }) => (
  <Cart.Provider value={cartValue}>{children}</Cart.Provider>
);

describe("CartItem", () => {
  it("should display given product info ", () => {
    const cartValue = [[], vi.fn()];
    render(
      <MockCartProvider cartValue={cartValue}>
        <CartItem product={product} />
      </MockCartProvider>
    );

    // If not title truncated
    if (product.title.length <= 50) {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    }
    // If title truncated
    else {
      expect(
        screen.getByText(product.title.substring(0, 50) + "...")
      ).toBeInTheDocument();
    }

    // Check price = price * quantity
    expect(
      screen.getByText("$" + product.price * product.quantity)
    ).toBeInTheDocument();

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", product.image);
  });
});
