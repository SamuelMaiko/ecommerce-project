import React, { useEffect, useState } from 'react'
import PopularSupplierCard from './PopularSupplierCard'
import instance from '../../axios/instance';

const PopularSuppliers = () => {
    const [popularSuppliers, setPopularSuppliers] = useState([]);

    useEffect(() => {
        const getFeaturedProducts = async () => {
        try {
            const response = await instance.get("/api/accounts/popular-suppliers/");
            console.log(response.data);
            setPopularSuppliers(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        getFeaturedProducts();
    }, []);
  return (
    // <div>PopularSuppliers</div>
    <div className="w-[90%] mx-auto mt-14">
      <div className="">
        <h1 className="text-2xl font-semibold text-[#28A745] font-heading mb-4">
            Popular Suppliers
        </h1>
        <div className="grid grid-cols-3 gap-[1.35rem]">
            {popularSuppliers &&
                popularSuppliers.map((supplier, index) => {
                    return <PopularSupplierCard key={index} {...supplier} />
            })}
            
        </div>
      </div>
    </div>
  )
}

export default PopularSuppliers