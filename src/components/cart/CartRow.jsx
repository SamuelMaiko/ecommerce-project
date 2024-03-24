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
      <button onClick={removeCartItem}>Remove</button>
    </tr>
  );
};

export default CartRow;
