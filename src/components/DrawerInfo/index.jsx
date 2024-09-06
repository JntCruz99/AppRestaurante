import React, { useState } from 'react';
import { Typography, Box, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Importando o ícone de fechar
import RestaurantTabs from '../RestaurantTabs';

export default function DrawerInfo({ isOpen, toggleDrawer }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        {/* Botão de fechar no canto superior esquerdo */}
        <IconButton 
          onClick={toggleDrawer(false)} 
          sx={{ position: 'absolute', top: 8, left: 8 }} // Posição no canto superior esquerdo
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      <Box
        sx={{ width: 380, position: 'relative', marginTop:5 }} // Define posição relativa para o botão de fechar
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        

        <RestaurantTabs />
      </Box>
    </Drawer>
  );
}
