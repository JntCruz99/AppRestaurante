// DrawerSacola.js
import React from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckoutCard from '../CheckoutCard';

export default function DrawerSacola({ isOpen, toggleDrawer }) {

  return (
    <Drawer 
      anchor="right" 
      open={isOpen} 
      onClose={toggleDrawer(false)} // Corrigido para ser uma função
    >
      <IconButton
        onClick={toggleDrawer(false)} // Corrigido para ser uma função
        sx={{ position: 'absolute', top: 8, left: 8 }} // Posição no canto superior esquerdo
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Box
        sx={{ width: 380, marginTop: 5 }}
        role="presentation"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            toggleDrawer(false)();
          }
        }}
      >
        <CheckoutCard toggleDrawer={toggleDrawer} />
      </Box>
    </Drawer>
  );
}
