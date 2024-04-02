import React, { useEffect, useState } from "react";
import CartRow from "../cart/CartRow";
import { useMyGeneralContext } from "../../context/AppContext";
import OrderSummary from "../cart/OrderSummary";
import CartTable from "../cart/CartTable";
import instance from "../../axios/instance";

const Cart = ({ setIsCartOpen }) => {
  const {
    cartTotal,
    setCartTotal,
    cartNumber,
    setCartNumber,
    getCartItems,
    CART_ITEMS,
  } = useMyGeneralContext();

  useEffect(() => {
    getCartItems();
  }, []);
  // const CART_ITEMS = [
  //   {
  //     name: "Diatomite Ore",
  //     quantity: 4,
  //     price: 500,
  //   },
  //   {
  //     name: "Flouspar",
  //     quantity: 1,
  //     price: 1000,
  //   },
  //   {
  //     name: "Soda Ash",
  //     quantity: 8,
  //     price: 200,
  //   },
  // ];
  // useEffect(() => {
  //   const total = CART_ITEMS.reduce(
  //     (total, obj) => total + (obj["price"] * obj["quantity"] || 0),
  //     0
  //   );
  //   setCartTotal(total);
  //   setCartNumber(CART_ITEMS.length);
  // }, []);

  return (
    <div
      className={`absolute z-50 top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 right-0 text-black w-[92%] h-[90%] transition-transform duration-500 rounded-[4px] bg-[#f5f5f5] shadow-[0_0_18px_rgba(0,0,0,0.2)]`}
    >
      <div className="flex flex-col items-center md:flex-row w-full h-full">
        {/* ___________ LEFT SECTION BEGIN ______  */}
        <div className="relative flex-1  h-full pb-[3rem] md:pb-0 p-5 pt-14 md:p-14">
          <div className="flex justify-between ">
            <h1 className="font-medium font-heading text-lg md:text-xl">
              Shopping Cart
            </h1>
            <h1 className="font-medium font-heading  text-lg md:text-xl">
              {cartNumber} Items
            </h1>
          </div>
          {/* ________ separator ________   */}
          <div className="">
            <div className="border-t border-gray-300 mt-4"></div>
          </div>
          {/* _____ cart table ______  */}
          <CartTable CART_ITEMS={CART_ITEMS} />

          <p className="absolute bottom-4 text-xs md:text-md md:bottom-10 flex gap-2 text-blue-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-button">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 md:w-6 h-5 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </span>
            Continue Shopping
          </p>
        </div>

        {/* ________________ RIGHT SECTION BEGIN - order ______  */}
        <OrderSummary />
      </div>

      <span
        onClick={() => setIsCartOpen(false)}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 md:w-8 h-6 md:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  );
};

export default Cart;
