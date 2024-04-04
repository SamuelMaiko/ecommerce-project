import React, { useEffect, useState } from "react";
import SingleSupplier from "../components/suppliers/SingleSupplier";
import instance from "../axios/instance";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "../Cookies/Cookie";
import Loader from "../components/Loader/Loader";

const Suppliers = () => {
  const [suppliers, setSupplers] = useState([]);
  const [loadingState, setLoadingState] = useState("loading")

  useEffect(() => {
    const getSuppliers = async () => {
      try {
        const response = await instance.get("/api/accounts/suppliers/");
        // console.log(response.data.products);
        setSupplers(response.data);
        setLoadingState("completed")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSuppliers();
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
    <div className="w-full  bg-white">
      <div className=" w-[95%] mx-auto h-full bg-white grid md:grid-cols-2">
        <div className="pt-12 p-4 md:p-0 md:pt-7 w-[25rem] pb-[4rem] md:pb-0 md:h-full">
          <p className="capitalize font-heading font-bold text-lg md:text-xl">
            Welcome to Our suppliers page
          </p>
          <p className="mt-2 text-body text-sm text-gray-500">
            At Green Earth Extraction, we take pride in connecting you with
            trusted suppliers of high-quality raw materials. Our diverse network
            of suppliers offers a wide range of products to meet your business
            needs. Whether you&lsquo;re in manufacturing, construction, or any
            other industry requiring raw materials, you&lsquo;ll find reliable
            partners here
          </p>
          <div>
            <h1 className="mt-8 capitalize font-heading font-bold text-lg ">
              Why Choose Our Suppliers?
            </h1>
            <p className="mt-2 text-body text-sm text-[#333]">
              <span className="font-bold">Quality Assurance: </span>
              <span className="text-gray-500">
                Our suppliers undergo rigorous screening processes to ensure
                that they meet the highest standards of quality and reliability.
              </span>
            </p>
            <p className="mt-2 text-body text-sm text-[#333]">
              <span className="font-bold">Wide Selection: </span>
              <span className="text-gray-500">
                Explore a vast selection of raw materials, including metals,
                minerals, chemicals, and more, sourced from reputable suppliers
                worldwide.
              </span>
            </p>
          </div>
          <p className="mt-8 capitalize font-heading font-bold text-lg">
            Get started
          </p>
          <p className="mt-2 text-body  text-sm text-gray-500">
            Browse through our curated list of suppliers below to discover the
            perfect match for your raw material requirements. Whether
            you&lsquo;re looking for specific materials, quantities, or
            specialized services, our suppliers are here to fulfill your needs.
            We&lsquo;re committed to providing you with a hassle-free sourcing
            experience. If you have any questions or need assistance, feel free
            to reach out to our customer support team. Thank you for choosing
            Green Earth as your trusted partner in sourcing raw materials.
          </p>
        </div>
          <div className="w-full h-full">
          <div className={`${loadingState=="loading"?"":"hidden"} h-[35rem]`}>
          <Loader/>
        </div>
        <div className={`${loadingState==="completed"?"":"hidden"} md:pt-7 flex flex-col items-center h-fit md:grid grid-cols-2 gap-[1.35rem] px-4 pb-[5rem] md:pb-0 `}>

          {suppliers &&
            suppliers.map((supplier, index) => {
              return <SingleSupplier key={index} {...supplier} />;
            })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
