import React, { useEffect, useState } from "react";
import PopularSupplierCard from "./PopularSupplierCard";
import instance from "../../axios/instance";
import Loader from "../Loader/Loader";

const PopularSuppliers = () => {
  const [popularSuppliers, setPopularSuppliers] = useState([]);
  const [loadingState, setLoadingState] = useState("loading")

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const response = await instance.get("/api/accounts/popular-suppliers/");
        console.log(response.data);
        setPopularSuppliers(response.data);
        setLoadingState("completed")
        // setLoadingState("completed")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getFeaturedProducts();
  }, []);
  return (
    // <div>PopularSuppliers</div>
    <div className="w-[90%] mx-auto mt-12 md:mt-14 overflow-hidden">
      <div className="">
        <h1 className="text-2xl font-semibold text-[#28A745] font-heading mb-4">
          Popular Suppliers
        </h1>
        <div className={`${loadingState=="loading"?"":"hidden"} h-[18rem]`}>
          <Loader/>
        </div>
        <div className={` ${loadingState==="completed"?"":" hidden "} flex flex-col items-center md:grid md:grid-cols-3 gap-[1.35rem]`}>
          {popularSuppliers &&
            popularSuppliers.map((supplier, index) => {
              return <PopularSupplierCard key={index} {...supplier} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default PopularSuppliers;
