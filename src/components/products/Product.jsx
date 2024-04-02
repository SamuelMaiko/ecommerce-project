import React, { useRef, useState } from "react";
import salah from "../../assets/salah.jpeg";
import Review from "../products/Review";
import MineralCharacteristics from "../products/MineralCharacteristics";
import SupplierAndSourcing from "../products/SupplierAndSourcing";
import { useMyGeneralContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import instance from "../../axios/instance";

const Product = ({
  id,
  name,
  description,
  new_price,
  price,
  image,
  is_discounted,
}) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [activeSection, setActiveSection] = useState(0);
  const { backendDomain, setCartNumber, getCartItems } = useMyGeneralContext();
  const quant = useRef(1);

  const PRODUCT_DETAILS = [
    "Mineral characteristics",
    "Reviews",
    "Supplier & Sourcing",
  ];

  // const [itemPrice, setItemPrice] = useState()
  // const [total, setTotal] = useState(()=>itemQuantity*itemPrice)
  // const quant = 0;
  const decreaseQuantity = () => {
    setItemQuantity((current) => current - 1);
    quant.current = itemQuantity - 1;
    // toast.success(quant.current);
  };

  const increaseQuantity = () => {
    setItemQuantity((current) => current + 1);
    quant.current = itemQuantity + 1;

    // toast.success(quant.current);
  };
  const handleAddToCart = async () => {
    try {
      const QUANTITY = {
        quantity: quant.current,
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
    <div className="w-[92%] md:w-[76%] mx-auto rounded-lg overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.12)]  ">
      <div className="flex flex-col md:flex-row">
        <div className="w-[35rem] h-[29rem] flex-1 rounded-lg overflow-hidden">
          <img
            src={`${backendDomain}${image}`}
            className="h-full object-cover w-full"
            alt=""
          />
        </div>
        <div className="flex-1 p-8 bg-white">
          <h1 className="text-xl font-heading font-medium">{name}</h1>
          <div className="my-4 flex items-center gap-4">
            <p className="font-bold font-body text-lg ">Kshs. {new_price}</p>
            <p
              className={`${
                is_discounted ? "" : "hidden"
              } font-medium font-body line-through text-gray-400 text-md`}
            >
              Kshs. {price}
            </p>
          </div>
          <div className="flex gap-14 items-center">
            <td className="flex gap-1 items-center justify-center">
              <button onClick={decreaseQuantity} className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <input
                className="w-[2rem] h-[2rem] outline-none border border-gray-300 text-center"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                type="text"
              />
              <button onClick={increaseQuantity} className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </td>
            <button
              onClick={handleAddToCart}
              className=" w-full capitalize shadow-[2px_2px_10px_rgba(0,0,0,0.1)] bg-[#28A745] hover:bg-[#339966] transition-colors duration-300 text-white font-button border-none rounded-[6px] px-[20px] py-[10px] text-sm"
            >
              Add to cart
            </button>
          </div>
          <div className="mt-8 md:mb-2 text-lg text-gray-600 font-body">
            <p className="font-medium text-black text-sm md:text-md font-heading">
              Description
            </p>
            <p className="text-gray-400 text-xs md:text-sm h-[2rem] overflow-hidden md:h-fit">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="md:mt-2 grid grid-cols-3 gap-1 md:gap-4">
        {PRODUCT_DETAILS.map((category, index) => {
          return (
            <button
              onClick={() => setActiveSection(index)}
              key={index}
              className={`
              ${activeSection == index ? "bg-primary text-white" : ""}
              px-2 py-1 md:py-2 text-xs md:text-md rounded-3xl bg-[#f5f5f5] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] text-black 
                    hover:bg-primary font-button font-semibold hover:text-[#f5f5f5] transition-colors duration-300 `}
            >
              {category}
            </button>
          );
        })}
      </div>
      <MineralCharacteristics OnactiveSection={activeSection} />

      <Review OnactiveSection={activeSection} />
      {/* <Review /> */}
      <SupplierAndSourcing OnactiveSection={activeSection} />
    </div>
  );
};

export default Product;
