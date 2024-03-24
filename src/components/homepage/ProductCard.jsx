import React from "react";
import salah from "../../assets/salah.jpeg";
import { useMyGeneralContext } from "../../context/AppContext";
import instance from "../../axios/instance";
import { toast } from "react-toastify";

const ProductCard = ({ id, name, description, image, price }) => {
  const { backendDomain, setCartNumber, getCartItems } = useMyGeneralContext();

  const truncateDescription = (description, maxWords) => {
    // Split the description into an array of words
    const words = description.split(" ");
    // Select the first maxWords words and join them back together
    const truncatedDescription = words.slice(0, maxWords).join(" ");
    // Add '...' at the end
    return truncatedDescription + (words.length > maxWords ? "..." : "");
  };

  const truncatedDescription = truncateDescription(description, 30);

  const handleAddToCart = async () => {
    try {
      const QUANTITY = {
        quantity: 1,
      };
      setCartNumber((current) => current + 1);
      // toast.success(QUANTITY.quantity);

      const response = await instance.post(
        `/api/commerce/add-to-cart/${id}/`,
        QUANTITY
      );
      if (response.status === 200) {
        toast.success("Product added to cart successfully");
        // console.log(response.data.token);
      } else if (response.status === 500) {
        toast.error("Add to cart failed");
      }
    } catch (error) {
      toast.error("Error when adding product");
    }
    getCartItems();
  };

  return (
    // <div className="w-full p-[20px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
    <div className="w-full bg-[#ECEFF4] p-[20px] rounded-lg border border-[#CCCCCC] ">
      <div className="">
        <div className="h-[12rem]">
          <img
            src={`${backendDomain}${image}`}
            className="h-full object-cover object-top w-full rounded-lg "
            alt=""
          />
        </div>
        <h2 className="text-lg font-heading font-semibold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-2 font-body">
          {truncatedDescription}
        </p>
        <p className="text-lg font-heading font-bold text-gray-800">
          Ksh. {price}
        </p>

        <button
          onClick={handleAddToCart}
          className="font-button mt-4 px-4 py-2 bg-[#28A745] text-white rounded
             hover:bg-[#339966] transition-colors duration-300 focus:outline-none focus:blue-blue-600"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
