import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import instance from "../../axios/instance";
import PopularSupplierCard from "../suppliers/PopularSupplierCard";
import Loader from "../Loader/Loader";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loadingState, setLoadingState] = useState("loading")

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const response = await instance.get("/api/commerce/featured-products/");
        // console.log(response.data.products);
        setFeaturedProducts(response.data.products);
        setLoadingState("completed")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getFeaturedProducts();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-14">
      <div className="">
        <h1 className="text-2xl font-semibold text-[#28A745] font-heading mb-4">
          Featured Products
        </h1>
        <div className={` ${loadingState=="loading"?"":"hidden"} h-[18rem]`}>
          <Loader/>
        </div>
        <div className={` ${loadingState==="completed"?"":" hidden "} flex flex-col items-center md:grid md:grid-cols-3 gap-[1.35rem]`}>
          {featuredProducts &&
            featuredProducts.map((product, index) => {
              return <ProductCard key={index} {...product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
