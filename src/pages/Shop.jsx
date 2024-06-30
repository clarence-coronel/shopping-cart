import { useContext, useEffect, useState } from "react";
import { Products } from "../App";
import CategoryContainer from "../component/CategoryContainer";
import ProductsContainer from "../component/ProductContainer";

function Shop() {
  const [data, loading, error] = useContext(Products);

  if (loading)
    return (
      <div className="w-full max-w-[1400px] mx-auto">Loading placeholder</div>
    );

  return (
    <div className="max-lg:flex-col p-10 flex justify-between gap-10 w-full max-w-[1400px] mx-auto">
      <CategoryContainer />
      <ProductsContainer />
    </div>
  );
}

export default Shop;
