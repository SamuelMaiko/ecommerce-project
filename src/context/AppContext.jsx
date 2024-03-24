import React, { createContext, useContext, useEffect, useState } from "react";
import instance from "../axios/instance";
import { toast } from "react-toastify";

const GeneralContext = createContext();
export const useMyGeneralContext = () => useContext(GeneralContext);

const AppContext = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(2000);
  const [cartNumber, setCartNumber] = useState(0);
  const [CART_ITEMS, setCART_ITEMS] = useState([]);

  const backendDomain = "http://localhost:8000";

  const getCartItems = async () => {
    try {
      const response = await instance.get("/api/commerce/cart-items/");
      // console.log(response.data.products);
      setCART_ITEMS(response.data.cart_items);
      setCartTotal(response.data.cart_total);
      // toast.success("Cart Items set to", response.data.cart_total);
      setCartNumber(response.data.cart_items.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        backendDomain,
        cartTotal,
        setCartTotal,
        cartNumber,
        setCartNumber,
        getCartItems,
        CART_ITEMS,
        setCART_ITEMS,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default AppContext;
