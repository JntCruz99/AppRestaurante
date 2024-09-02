// src/ThemeToggle.jsx
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';

const ThemeToggle = ({ mode, setMode }) => {
  return (
    <IconButton
      sx={{ 
        position: 'fixed', 
        top: 16, 
        right: 16, 
        zIndex: (theme) => theme.zIndex.appBar + 1,
      }}
      color="inherit"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
