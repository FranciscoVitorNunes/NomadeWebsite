import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const removeItemFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter(cartItem => cartItem.name !== item.name)
    );
  };

  const toggleItemInCart = (item, quantity) => {
    if (isInCart(item)) {
      removeItemFromCart(item);
    } else {
      addItemToCart(item, quantity);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (item) => {
    return cartItems.some(cartItem => cartItem.name === item.name);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, toggleItemInCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;