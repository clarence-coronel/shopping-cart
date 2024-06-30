import { useContext, useEffect, useState } from "react";
import { Products } from "../App";
import { Link, useSearchParams } from "react-router-dom";
import Card from "./Card";

function ProductsContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, loading, error] = useContext(Products);

  //  If category query is empty or does not exist set category to first entry in categories
  if (!searchParams.get("category")) {
    searchParams.set("category", data.categories[0]);
    window.history.pushState({}, "", `/shop?category=${data.categories[0]}`);
  }

  const categoryExist = data.categories.find(
    (category) =>
      category.toLowerCase() == searchParams.get("category").toLowerCase()
  );

  //   If category does not exist display this
  if (!categoryExist) return <div>Category does not exist.</div>;

  //   Filter products base on given category
  const filteredProducts = (category) => {
    // If category is set to all return all products
    if (category === "all") return data.products;

    return data.products.filter(
      (product) =>
        product.category.toLowerCase() == searchParams.get("category")
    );
  };

  // If loading has ended show content
  if (!loading)
    return (
      <div className="max-md:grid-cols-1 max-lg:grid-cols-2 mx-auto grid grid-cols-4 gap-5">
        {filteredProducts(searchParams.get("category")).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    );
}

export default ProductsContainer;
