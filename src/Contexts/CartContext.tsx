import React, { createContext, ReactNode, useState } from "react";

// تعریف نوع‌های مربوط به محصول
type ID = number | string;

interface Product {
  id: ID;
  [key: string]: any;
}

// تعریف نوع‌های مربوط به آیتم‌های سبد خرید
interface CartItem extends Product {
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

// تعریف نوع‌های مربوط به Context
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, id: ID) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, id: ID) => {
    const newItem = { ...product, amount: 1 };
    // بررسی کنید که آیا محصول در سبد خرید وجود دارد
    const cartItem = cart.find((item) => item.id === id);
    // اگر محصول وجود دارد
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};