import React, { createContext, useContext, useState } from 'react';

// Product Type Definition
type Product = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
};

// Cart Context Type Definition
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, change: number) => void;
  clearCart: () => void;
};

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add Product to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      return itemExists
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update Product Quantity
  const updateQuantity = (id: string, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: (item.quantity || 1) + change } : item
        )
        .filter((item) => (item.quantity || 0) > 0) // Remove item when quantity reaches 0
    );
  };

  // Clear Cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
