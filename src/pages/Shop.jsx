import { useContext, useEffect, useState } from "react";
import { Products } from "../App";
import CategoryContainer from "../component/CategoryContainer";
import ProductsContainer from "../component/ProductContainer";

function Shop() {
  const [data, loading, error] = useContext(Products);

  const renderDummySquares = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="bg-neutral-200 animate-pulse aspect-[9/12] w-full max-w-[250px]"
      ></div>
    ));
  };

  if (loading)
    return (
      <div className="p-10 grid grid-cols-4 gap-5 w-full max-w-[1400px] mx-auto">
        {renderDummySquares(10)}
      </div>
    );

  return (
    <div className="max-lg:flex-col p-10 flex justify-between gap-10 w-full max-w-[1400px] mx-auto">
      <CategoryContainer />
      <ProductsContainer />
    </div>
  );
}

export default Shop;
