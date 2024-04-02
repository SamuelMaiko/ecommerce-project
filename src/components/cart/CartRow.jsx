import React, { useEffect, useRef, useState } from "react";
import { useMyGeneralContext } from "../../context/AppContext";
import instance from "../../axios/instance";
import { toast } from "react-toastify";

const CartRow = ({ id, product, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemPrice, setItemPrice] = useState(parseInt(product.price));
  const [total, setTotal] = useState(() => itemQuantity * itemPrice);

  const quant = useRef(quantity);

  const {
    setCartTotal,
    setCartNumber,
    getCartItems,
    CART_ITEMS,
    setCART_ITEMS,
  } = useMyGeneralContext();

  //   const tot = useRef(total);
  const getCartItems2 = async () => {
    try {
      const response = await instance.get("/api/commerce/cart-items/");
      // console.log(response.data.products);
      setCartTotal(response.data.cart_total);
      // toast.success(response.data.cart_total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getCartItems2();
    // getCartItems();
    // toast.success("Rerendered");
    setTotal(quant.current * itemPrice);
    // setItemQuantity(quantity);
  }, [itemQuantity]);

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
    quant.current = itemQuantity + 1;
    // toast.success(quant.current);
    updateCartItemQuantity();
    // getCartItems();
  };

  const decreaseQuantity = () => {
    setItemQuantity(itemQuantity - 1);
    quant.current = itemQuantity - 1;
    // toast.success(quant.current);
    updateCartItemQuantity();
    // getCartItems();
  };

  //
  const updateCartItemQuantity = async () => {
    // console.log(inputField.current.value);
    const body = {
      quantity: quant.current,
    };
    try {
      const response = await instance.patch(
        `/api/commerce/cart-items/${id}/`,
        body
      );

      // toast.success("New", response.data.cart_total);
      setCartTotal(response.data.cart_total);

      // if (response.status === 200) {
      //   toast.success("added successfully");
      // }

      //   console.log(response.data.quantity);
    } catch (errors) {
      alert(errors);
    }
  };
  const removeCartItem = () => {
    // setItemQuantity(itemQuantity - 1);
    setCartNumber((current) => current - 1);

    const removeFromUI = () => {
      const newCartItems = CART_ITEMS.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
      setCART_ITEMS(newCartItems);
    };
    removeFromUI();

    const removeCartFromDB = async () => {
      try {
        const response = await instance.delete(
          `/api/commerce/cart-items/${id}/`
        );
        if (response.status === 200) {
          toast.success("Product removed from cart successfully");
          // getCartItems();
        }
      } catch (error) {
        toast.error("Error occurred during remove from cart");
      }

      const response = await instance.get("/api/commerce/cart-items/");
      // console.log(response.data.products);
      setCART_ITEMS(response.data.cart_items);
      // setCartTotal(response.data.cart_total);
      // toast.success("Cart Items set to", response.data.cart_total);
      // setCartNumber(response.data.cart_items.length);
    };
    removeCartFromDB();
    getCartItems2();
    getCartItems();
  };
  //

  // updateCartItemQuantity(quantity);

  return (
    <tr className="h-[3rem]">
      <td className="text-left">{product.name}</td>
      <td className="flex gap-1 justify-center">
        {/* <form className="flex gap-1 justify-center"> */}
        <button
          onClick={() => decreaseQuantity()}
          type="submit"
          className="text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <input
          className="w-[2rem] outline-none border border-gray-300 text-center"
          value={itemQuantity}
          onChange={() => {}}
          type="text"
        />
        <button
          onClick={() => increaseQuantity()}
          type="submit"
          className="text-xl"
        >
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
        {/* </form> */}
      </td>
      <td className="text-center">Ksh. {product.price}</td>
      <td className="text-center">Ksh. {total}</td>
      <button
        onClick={removeCartItem}
        className="text-red-500 hover:text-red-700 transition-colors duration-300 mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 md:w-6 h-5 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </tr>
  );
};

export default CartRow;
