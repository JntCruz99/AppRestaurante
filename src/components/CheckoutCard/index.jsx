import React from 'react';
import { Box, Typography, Button, Divider, TextField } from '@mui/material';

const CheckoutCard = () => {
  return (
    <Box sx={{  p: 2}}>
      <Typography variant="h6">SEU PEDIDO</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" fontWeight="bold">Promoção</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>1x Monte Sua Marmita</Typography>
        <Typography fontWeight="bold">R$ 25,99</Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        1x Carne Acebolada, 1x Carne de Sol Acebolada, 1x Sem Arroz, 1x Feijão Preto, 1x Sem Macarrão, 1x Batata Frita, 1x Purê de Batata
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <Button variant="text" size="small">Editar</Button>
        <Button variant="text" size="small">Remover</Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography>Subtotal</Typography>
        <Typography>R$ 25,99</Typography>
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
        <Typography variant="h6" fontWeight="bold">R$ 27,29</Typography>
      </Box>

      <Button variant="contained" color="primary" fullWidth>
        Escolher forma de pagamento
      </Button>
    </Box>
  );
};

export default CheckoutCard;
