import React, { useEffect, useState } from "react";
import CategoryTile from "./CategoryTile";
import instance from "../../axios/instance";

const ExploreByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await instance.get("/api/commerce/categories/");
        // console.log(response.data.products);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-14">
      <h1 className="text-2xl text-[#28A745] font-semibold font-heading mb-4">
        Categories
      </h1>
      <div className="grid grid-cols-4 gap-[1.25rem]">
        {categories &&
          categories.map((category, index) => {
            return <CategoryTile key={index} {...category} />;
          })}
      </div>
    </div>
  );
};

export default ExploreByCategory;
