import {React, useState, useEffect} from 'react';
import Routes from './routes/index';
import './App.css';
import { ThemeProvider, CssBaseline , Button } from '@mui/material';
import { createAppTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';

function App() {
  // Recupera o tema salvo no localStorage ou define o tema padrão como 'light'
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'light');

  // Atualiza o tema no localStorage sempre que o tema mudar
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  // Cria o tema com base no modo
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Componente para alternar o tema */}
      <ThemeToggle mode={mode} setMode={setMode} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
