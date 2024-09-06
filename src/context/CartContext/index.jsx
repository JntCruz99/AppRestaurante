import React, { createContext } from 'react';
import useCart from '../../hooks/useCart';


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const {  adicionarIten, removerItem, quantidadePedido, pedidos } = useCart();

  return (
    <CartContext.Provider value={{  adicionarIten, removerItem, quantidadePedido, pedidos }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };