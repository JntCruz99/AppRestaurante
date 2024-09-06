import React, { useState } from 'react'; // Adicionado o useState
import { Typography, Box, Drawer,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckoutCard from '../CheckoutCard';

export default function DrawerSacola({ isOpen, toggleDrawer }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <IconButton 
          onClick={toggleDrawer(false)} 
          sx={{ position: 'absolute', top: 8, left: 8 }} // Posição no canto superior esquerdo
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      <Box
        sx={{ width: 380 , marginTop:5 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
       <CheckoutCard/> 
      </Box>
    </Drawer>
  );
}
