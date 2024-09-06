import React, { useState } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import Divider, { dividerClasses } from '@mui/material/Divider';
import DrawerInfo from '../DrawerInfo'

const defaultBanner = 'https://via.placeholder.com/1200x150.png?text=Imagem+não+disponível';


function RestauranteHeader({ bannerUrl, logoUrl, nome, avaliacao, pedidoMinimo }) {

  const [bannerSrc, setBannerSrc] = useState(bannerUrl || defaultBanner);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleImageError = () => {
    setBannerSrc(defaultBanner);
  };

  return (
    <>
    <DrawerInfo isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    <Box
      sx={{
        padding: { xs: 0, md: 11 }, // Sem padding em dispositivos móveis, padding de 11 em telas médias e maiores
        paddingBottom: { xs: 0, md: 0 },
        paddingTop: { xs: 0, md: 3 },
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: 2,
        marginBottom: 4
      }}
    >
      {/* Banner */}
      <Box
        component="img"
        src={bannerSrc}
        alt="Banner"
        sx={{ width: '100%', height: '230px', objectFit: 'cover', padding: 2, borderRadius: 5 }}
        onError={handleImageError} // Se a imagem falhar ao carregar, substitui pela imagem padrão
      />

      {/* Informações do Restaurante */}
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px', gap: '16px' }}>
        {/* Logo do Restaurante */}
        <Avatar
          src={logoUrl}
          alt={nome}
          sx={{ width: 64, height: 64, border: '2px solid #fff', boxShadow: 1 }}
        />

        {/* Nome e Avaliação */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div">
            {nome}
            <Typography component="span" sx={{ fontSize: '1rem', marginLeft: '8px', color: 'gold' }}>
              ★ {avaliacao}
            </Typography>
          </Typography>
        </Box>

        {/* Botões de Ação */}
        <Button color="error" sx={{ textTransform: 'none' }} onClick={toggleDrawer(true)}>Ver mais</Button>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2" sx={{ color: 'gray' }}>Pedido mínimo R$ {pedidoMinimo.toFixed(2)}</Typography>
      </Box>
    </Box>
    </>
  );
};

export default RestauranteHeader