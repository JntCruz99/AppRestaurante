import {React, useState, useEffect} from 'react';
import Routes from './routes/index';
import './App.css';
import { ThemeProvider, CssBaseline , Button } from '@mui/material';
import { createAppTheme } from './theme';

function App() {

  // Recupera o tema salvo no localStorage ou define o tema padrão como 'light'
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'light');

  // Atualiza o tema no localStorage sempre que o tema mudar
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  // Crie o tema com base no modo
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Alternar Tema
      </Button>
    <Routes />
    </ThemeProvider>
    
  );
}

export default App;
