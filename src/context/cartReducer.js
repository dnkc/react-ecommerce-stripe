import React from "react";

const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
    total: cartItems.reduce(
      (total, prod) => total + prod.price * prod.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      //check if item is already in cart
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        // only runs if item is not in cart
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    default:
      return state;
  }
};

export default cartReducer;
