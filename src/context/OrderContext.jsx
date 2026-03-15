import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const isThursday = new Date().getDay() === 4;

  const addItem = (product, quantity = 1) => {
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setOrderItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeItem = (productId) => {
    setOrderItems((prev) =>
      prev.filter((item) => item.product.id !== productId),
    );
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  const getOrderTotal = () => {
    const total = orderItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
    return isThursday ? total * 0.8 : total;
  };

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        addItem,
        updateQuantity,
        removeItem,
        clearOrder,
        getOrderTotal,
        isThursday,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
