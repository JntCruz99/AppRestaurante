// src/theme.js
import { createTheme } from '@mui/material/styles';

// Função para criar o tema
export const createAppTheme = (mode = 'light') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#dc004e' : '#dc004e', // Cor primária: azul claro no modo escuro
    },
    secondary: {
      main: mode === 'light' ? '#f48fb1' : '#f48fb1', // Cor secundária: rosa claro no modo escuro
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212', // Cor de fundo: preto no modo escuro
      paper: mode === 'light' ? '#f5f5f5' : '#424242', // Cor de fundo dos papéis: cinza claro no modo escuro
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff', // Cor do texto principal: branco no modo escuro
      secondary: mode === 'light' ? '#555555' : '#b0b0b0', // Cor do texto secundário: cinza claro no modo escuro
    },
  },
});
