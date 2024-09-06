import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Divider,Button } from '@mui/material';

// Componente para o conteúdo de cada aba
const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const RestaurantTabs = () => {
  const [tabIndex, setTabIndex] = useState(0); // Controla o índice da aba selecionada

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      {/* Abas */}
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Sobre" />
        <Tab label="Horário" />
        <Tab label="Pagamento" />
      </Tabs>

      <Divider />

      {/* Conteúdo das Abas */}
      <TabPanel value={tabIndex} index={0}>
        <Typography variant="body1" gutterBottom>
          Vem pro BK! Tags: hamburguer Hamburger Promoção Cupons barato ofertas fast food preço baixo oportunidade whopper delivery sundae lanche...
          <Button sx={{ textTransform: 'none', color: 'error.main' }}>Ver mais</Button>
        </Typography>
        <Typography variant="h6" gutterBottom>Endereço</Typography>
        <Typography variant="body2">Rua Deputado Odon Bezerra, 184 - Tambiá, João Pessoa - PB, CEP: 58020-500</Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Outras informações</Typography>
        <Typography variant="body2">CNPJ: 13.574.594/0749-80</Typography>
        <Typography variant="caption" display="block" sx={{ mt: 2, color: 'gray' }}>
          O iFood é gratuito para os usuários e todos os preços apresentados no cardápio são definidos pela própria loja.
        </Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Typography variant="body1">Horário de Funcionamento</Typography>
        <Typography variant="body2">Segunda a Sexta: 10:00 - 22:00</Typography>
        <Typography variant="body2">Sábado e Domingo: 11:00 - 23:00</Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <Typography variant="body1">Opções de Pagamento</Typography>
        <Typography variant="body2">Cartões de crédito, débito, PIX, dinheiro</Typography>
      </TabPanel>
    </Box>
  );
};

export default RestaurantTabs;
