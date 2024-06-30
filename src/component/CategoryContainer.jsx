import { useContext, useEffect, useState } from "react";
import { Products } from "../App";
import { Link, useSearchParams } from "react-router-dom";

function CategoryContainer() {
  const [data, loading, error] = useContext(Products);

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex flex-col gap-5">
      {data.categories.map((category) => (
        <Link
          className={`text-sm duration-200 ${
            searchParams.get("category") === category
              ? "translate-x-2 text-purple-600 font-semibold"
              : "hover:translate-x-2 hover:text-purple-600"
          }`}
          key={category}
          to={"/shop?category=" + category}
        >
          {category.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export default CategoryContainer;
