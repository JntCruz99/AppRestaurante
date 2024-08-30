// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import './navbar.css';
import LoginButton from '../LoginButton';
import Sacola from '../sacola'

const Navbar = () => {
  const theme = useTheme(); // Acessa o tema atual

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>
            NavBar
          </Link>
        </Typography>
        <Box>
          <Button component={Link} to="/" sx={{ color: theme.palette.primary.contrastText }}>
            Home
          </Button>
          <Button component={Link} to="/carrinho" sx={{ color: theme.palette.primary.contrastText }}>
            Carrinho
          </Button>
          <Button component={Link} to="/pedido" sx={{ color: theme.palette.primary.contrastText }}>
            Pedido
          </Button>
          <Button component={Link} to="/pedidos" sx={{ color: theme.palette.primary.contrastText }}>
            Pedidos
          </Button>
          <LoginButton />
          <Sacola/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
