import React, { useState, useContext, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab'; 
import DrawerSacola from '../DrawerSacola';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { CartContext } from '../../context/CartContext';

// Definindo o estilo para o Badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Sacola() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { quantidadePedido } = useContext(CartContext);
  const [numeroDePedidos, setNumeroDePedidos] = useState(quantidadePedido());

  // Atualiza o número de pedidos sempre que a quantidade mudar
  useEffect(() => {
    setNumeroDePedidos(quantidadePedido());
  }, [quantidadePedido]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Componente do Drawer */}
      <DrawerSacola isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* FAB que controla o Drawer */}
      <Fab
        color="primary"
        aria-label="sacola"
        onClick={toggleDrawer(true)}
        sx={{ marginBottom: 1 }}
      >
        <StyledBadge badgeContent={numeroDePedidos} color="secondary">
          <ShoppingBagIcon />
        </StyledBadge>
      </Fab>
    </>
  );
}
