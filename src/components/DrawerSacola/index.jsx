import React, { useState } from 'react'; // Adicionado o useState
import { Typography, Box, Drawer } from '@mui/material';
import CheckoutCard from '../CheckoutCard';

export default function DrawerSacola({ isOpen, toggleDrawer }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 380 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
       <CheckoutCard/> 
      </Box>
    </Drawer>
  );
}
