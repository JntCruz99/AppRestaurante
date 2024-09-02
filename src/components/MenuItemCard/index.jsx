import React, { useState } from 'react';
import {
  Card, CardContent, CardMedia, Typography, CardActions, Button, Dialog,
  DialogTitle, DialogContent, TextField, IconButton, Checkbox, FormControlLabel, FormGroup, Box
} from '@mui/material';
import { Add, Remove, Close } from '@mui/icons-material';

const MenuItemCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQuantity(1);
    setSelectedOptions({});
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleOptionChange = (itemName, optionName, isChecked) => {
    setSelectedOptions((prevSelectedOptions) => {
      const currentOptions = prevSelectedOptions[itemName] || [];
      let updatedOptions;

      if (isChecked) {
        updatedOptions = [...currentOptions, optionName];
      } else {
        updatedOptions = currentOptions.filter((opt) => opt !== optionName);
      }

      return {
        ...prevSelectedOptions,
        [itemName]: updatedOptions,
      };
    });
  };

  const isOptionDisabled = (itemName, maximo) => {
    const selected = selectedOptions[itemName] || [];
    return selected.length >= maximo;
  };

  const calculateAdditionalCost = () => {
    let total = 0;
    item.Itens.forEach((group) => {
      group.opcoes.forEach((option) => {
        if (selectedOptions[group.nome]?.includes(option.nome)) {
          total += option.preco || 0;
        }
      });
    });
    return total;
  };

  const totalCost = (item.price + calculateAdditionalCost()) * quantity;

  return (
    <>
      <Card sx={{ display: 'flex', alignItems: 'center', margin: '16px', height: '100%' , width:'100%'}}>
        <CardMedia
          component="img"
          sx={{ width: 140 , height: '100%'}}
          image={item.image}
          alt={item.name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '1px' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="h6" color="primary">
              R$ {item.price.toFixed(2)}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
          <IconButton color="primary" onClick={handleClickOpen}>
            <Add />
          </IconButton>
        </Box>
      </Card>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ paddingLeft: 20, paddingRight: 20 }}>
          Monte seu Prato
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">Serve</Typography>
          <TextField
            type="number"
            variant="outlined"
            size="small"
            value={item.serve}
            sx={{ width: '60px', marginBottom: '16px' }}
            InputProps={{ inputProps: { min: 1, max: 10 } }}
          />

          {item.Itens.map((group) => (
            <div key={group.nome} style={{ marginBottom: '16px' }}>
              <Typography variant="h6">{group.nome} (Escolha até {group.maximo})</Typography>
              <FormGroup>
                {group.opcoes.map((option) => (
                  <FormControlLabel
                    key={option.nome}
                    control={
                      <Checkbox
                        name={option.nome}
                        checked={selectedOptions[group.nome]?.includes(option.nome) || false}
                        onChange={(e) =>
                          handleOptionChange(group.nome, option.nome, e.target.checked)
                        }
                        disabled={
                          isOptionDisabled(group.nome, group.maximo) &&
                          !selectedOptions[group.nome]?.includes(option.nome)
                        }
                      />
                    }
                    label={`${option.nome} ${option.preco ? `+ R$ ${option.preco.toFixed(2)}` : ''}`}
                  />
                ))}
              </FormGroup>
            </div>
          ))}
        </DialogContent>
        <DialogContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
            <IconButton onClick={() => handleQuantityChange(-1)}>
              <Remove />
            </IconButton>
            <TextField
              type="number"
              variant="outlined"
              size="small"
              value={quantity}
              sx={{ width: '60px', textAlign: 'center' }}
              InputProps={{ inputProps: { min: 1, style: { textAlign: 'center' } } }}
              readOnly
            />
            <IconButton onClick={() => handleQuantityChange(1)}>
              <Add />
            </IconButton>
          </div>
        </DialogContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleClose} sx={{ width: '90%' }}>
            Adicionar R$ {totalCost.toFixed(2)}
          </Button>
        </CardActions>
      </Dialog>
    </>
  );
};

export default MenuItemCard;
