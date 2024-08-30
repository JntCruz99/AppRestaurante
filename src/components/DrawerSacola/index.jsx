import React, { useState } from 'react'; // Adicionado o useState
import { Typography, Box, Drawer } from '@mui/material';

export default function DrawerSacola({ isOpen, toggleDrawer }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <Typography variant="h6" sx={{ padding: 2 }}>
          Carrinho
        </Typography>
        {/* Conteúdo do Drawer */}
        <Box sx={{ padding: 2 }}>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </Box>
      </Box>
    </Drawer>
  );
}
