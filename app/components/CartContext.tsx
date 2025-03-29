import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css"; 
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    
    setCart((prevCart) => [...prevCart, product]);
    toast.success('Added to cart !', {
        position: "top-right",
        autoClose: 2000,

        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
     
        theme: "dark",
       
        });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.info('Removed from cart !', {
        position: "top-right",
        autoClose: 2000,

        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
     
        theme: "dark",
       
        });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart =  () => {
   
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
