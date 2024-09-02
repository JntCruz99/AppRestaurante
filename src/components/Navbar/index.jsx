// src/Navbar.jsx
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Menu, MenuItem, Fab } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Sacola from '../sacola';
import LoginButton from '../LoginButton';

const Navbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 2, // Espaçamento entre os FABs
        zIndex: theme.zIndex.appBar, // Para que os FABs fiquem acima de outros elementos
      }}
    >
      {/* FAB para Sacola */}
      
      <Sacola  />


      {/* FAB para Perfil */}
      <Fab color="secondary" aria-label="perfil" onClick={handleMenuOpen}>
        <PersonIcon />
      </Fab>

      {/* Menu de Perfil */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <LoginButton />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;
