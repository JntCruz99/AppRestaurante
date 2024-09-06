import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

const CheckoutCard = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem('meuPedido')) || [];
    setPedidos(pedidosSalvos);
  }, []);

  const handleRemoverPedido = (index) => {
    const pedidosAtualizados = pedidos.filter((_, i) => i !== index);
    setPedidos(pedidosAtualizados);
    localStorage.setItem('meuPedido', JSON.stringify(pedidosAtualizados));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">SEU PEDIDO</Typography>
      <Divider sx={{ my: 2 }} />

      {pedidos.length === 0 ? (
        <Typography variant="body1" color="textSecondary">Sacola vazia</Typography>
      ) : (
        pedidos.map((pedido, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">{pedido.quantidade}x {pedido.titulo}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>{pedido.pedido}</Typography>
              <Typography fontWeight="bold">R$ {pedido.total}</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
              {pedido.observacoes}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Button variant="text" size="small">Editar</Button>
              <Button variant="text" size="small" onClick={() => handleRemoverPedido(index)}>Remover</Button>
            </Box>
            <Divider sx={{ my: 2 }} />
          </Box>
        ))
      )}

      {/* Exemplo de resumo de preço e botões de ação */}
      {pedidos.length > 0 && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>Subtotal</Typography>
            <Typography>R$ {pedidos.reduce((acc, pedido) => acc + parseFloat(pedido.total), 0).toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>Taxa de Serviço</Typography>
            <Typography>R$ 1,30</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>Taxa de entrega</Typography>
            <Typography color="primary">Grátis</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6" fontWeight="bold">R$ {(pedidos.reduce((acc, pedido) => acc + parseFloat(pedido.total), 0) + 1.30).toFixed(2)}</Typography>
          </Box>

          <Button variant="contained" color="primary" fullWidth>
            Escolher forma de pagamento
          </Button>
        </>
      )}
    </Box>
  );
};

export default CheckoutCard;
