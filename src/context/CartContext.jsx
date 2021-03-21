import React, { useReducer, createContext } from "react";
import cartReducer from "./cartReducer";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
  itemCount: 0,
  total: 0,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });

  const increaseQuantity = (product) =>
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: product,
    });

  const decreaseQuantity = (product) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });
  };

  const removeProduct = (product) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const contextValues = {
    ...state,
    addProduct,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
