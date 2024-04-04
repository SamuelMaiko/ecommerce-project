import React, { useEffect, useState } from "react";
import TestimonialCard from "../components/homepage/TestimonialCard";
import Product from "../components/products/Product";
import HorizontalSeparator from "../components/common/HorizontalSeparator";
import instance from "../axios/instance";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "../Cookies/Cookie";
import Loader from "../components/Loader/Loader";

const Products = () => {
  const CATEGORIES = ["All", "AI Picks", "Top"];
  const [activeCategory, setActiveCategory] = useState(0);

  const [products, setProducts] = useState([]);
  const [loadingState, setLoadingState] = useState("loading")

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await instance.get("/api/commerce/products/");
        // console.log(response.data.products);
        setProducts(response.data.products);
        setLoadingState("completed")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProducts();
    
  }, []);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const accessToken = getCookie("access_token");
    if (pathname !== "/login" || pathname !== "/signup") {
      if (!accessToken) {
        navigate("/login");
      }
    }
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <div className="mt-2 flex gap-x-8 items-center">
        <div className=" flex gap-1 md:gap-4">
          {CATEGORIES.map((category, index) => {
            return (
              <button
                onClick={() => setActiveCategory(index)}
                key={index}
                className={`
                ${category == "AI Picks" ? "text-red-500 font-semibold " : ""}
                ${
                  activeCategory == index
                    ? "bg-black text-[#f5f5f5] "
                    : "bg-blue-100"
                } px-3 md:px-5 py-1 md:py-2 text-sm rounded-3xl  shadow-[2px_2px_4px_rgba(0,0,0,0.1)]
                      hover:bg-black hover:text-[#f5f5f5] transition-colors duration-800 `}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="">Filter:</label>
          <select className="text-black outline-none text-sm h-[2rem] border border-black rounded-lg shadow-[2px_2px_4px_rgba(0,0,0,0.1)] w-[9rem]">
            <option value="Select an option">Select an option</option>
            <option value="Price: Low to  High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Name: A to Z">Name: A to Z</option>
            <option value="Name: Z to A">Name: Z to A</option>
          </select>
        </div>
      </div>

        <div className={`${loadingState=="loading"?"":"hidden"} h-[35rem]`}>
          <Loader/>
        </div>
      <div className={`${loadingState==="completed"?"":"hidden"} mt-4 pb-32 flex flex-col gap-8`}>
        {products &&
          products.map((product, index) => {
            return (
              <div key={index}>
                <Product {...product} />
                <HorizontalSeparator />
              </div>
            );
          })}
      </div>

      {/* <div>
            <p>Mineral characteristics</p>
            <p>Reviews</p>
        </div> */}
    </div>
  );
};

export default Products;
