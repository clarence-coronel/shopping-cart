import { useContext, useEffect, useState } from "react";
import { Products } from "../App";
import { Link } from "react-router-dom";

function Banner() {
  const [data, loading, error] = useContext(Products);

  const [imageURL, setimageURL] = useState("");

  useEffect(() => {
    if (!loading && data && data.products.length !== 0)
      setimageURL(data.products[0].image);
  }, [data]);

  return (
    <div className="min-h-[400px] max-w-[800px] mx-auto w-full border-2 p-8 m-2 rounded-md flex justify-between items-start max-md:p-5">
      <div className="my-auto w-full h-full flex flex-col gap-3">
        <h1 className="text-4xl font-bold">New Spring Arrivals!</h1>

        <h2 className="text-2xl font-bold">
          Welcome to <span className="text-purple-600">Fake Store</span>
        </h2>
        <p className="max-w-[400px] text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          corporis, aut quaerat quo voluptates fugit laborum ipsa, sed
          reprehenderit.
        </p>
        <Link
          to="/shop"
          className="max-md:w-full text-center hover:bg-purple-700 hover:cursor-pointer duration-200 w-fit p-2 bg-purple-600 text-white rounded-md"
        >
          Shop Now!
        </Link>
      </div>

      <div className="max-lg:hidden w-full h-full relative">
        <img
          className="peer max-h-[400px] hover:scale-125 hover:rotate-0 duration-500 top-0 right-0 absolute border-purple-600 border-4 p-5 z-20 rotate-[12deg] bg-white rounded-xl object-contain"
          src={imageURL}
          alt=""
        />
        <img
          className="peer-hover:rotate-0 max-h-[400px] duration-500 top-0 right-0  absolute  border-purple-600 border-4 p-5 z-10 rotate-[18deg] bg-white rounded-xl object-contain"
          src={imageURL}
          alt=""
        />
        <img
          className="peer-hover:rotate-0 max-h-[400px] duration-500 top-0 right-0  absolute border-purple-600 border-4 p-5 z-10 rotate-[25deg] bg-white rounded-xl object-contain"
          src={imageURL}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
