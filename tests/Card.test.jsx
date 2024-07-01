import { render, screen } from "@testing-library/react";
import Card from "../src/component/Card";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Cart } from "../src/App";

const MockCartProvider = ({ children, cartValue }) => (
  <Cart.Provider value={cartValue}>{children}</Cart.Provider>
);

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
};

describe("NavigationLink", () => {
  it("should display given product info if given", () => {
    const cartValue = [[], vi.fn()];
    render(
      <MockCartProvider cartValue={cartValue}>
        <Card product={product} />
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

    // Check price
    expect(screen.getByText("$" + product.price)).toBeInTheDocument();

    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();

    expect(img).toHaveAttribute("src", product.image);
  });
});
