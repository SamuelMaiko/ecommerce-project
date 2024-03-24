import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import instance from "../../axios/instance";
import PopularSupplierCard from "../suppliers/PopularSupplierCard";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const response = await instance.get("/api/commerce/featured-products/");
        // console.log(response.data.products);
        setFeaturedProducts(response.data.products);
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
        <div className="grid grid-cols-3 gap-[1.35rem]">
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
