// useCart.js
import { useState, useEffect } from "react";

export default function useCart() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const listaDePedidos = JSON.parse(localStorage.getItem('meuPedido')) || [];
    setPedidos(listaDePedidos);
  }, []);

  useEffect(() => {
    localStorage.setItem('meuPedido', JSON.stringify(pedidos));
  }, [pedidos]);

  const adicionarIten = (novoPedido) => {
    setPedidos((prevPedidos) => [...prevPedidos, novoPedido]);
  };

  const removerItem = (indexParaRemover) => {
    setPedidos((prevPedidos) => 
      prevPedidos.filter((_, index) => index !== indexParaRemover)
    );
  };

  const quantidadePedido = () => {
    return pedidos.length;
  };

  return { adicionarIten, removerItem, quantidadePedido, pedidos };
}
