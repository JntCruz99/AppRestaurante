import {
  Card, CardContent, CardMedia, Typography, CardActions, Button, Dialog,
  DialogTitle, DialogContent, TextField, IconButton, Checkbox, FormControlLabel, FormGroup, Box
} from '@mui/material';
import { Add, Remove, Close } from '@mui/icons-material';
import React, { useState} from 'react';

const MenuItemCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [observacao, setObservacao] = useState('');
  const [pedidoCompleto, setPedidoCompleto] = useState([]);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQuantity(1);
    setSelectedOptions({});
    setObservacao('');
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

  const handleAddToCart = () => {
    const pedido = Object.keys(selectedOptions)
      .map((groupName) => {
        const opcoesSelecionadas = selectedOptions[groupName].map((opcao) => `1x ${opcao}`).join(', ');
        return `${groupName}: ${opcoesSelecionadas}`;
      })
      .join(' / ');
  
    const novoPedido = {
      titulo: item.name,
      pedido: pedido,
      quantidade: quantity,
      total: totalCost.toFixed(2),
      observacoes: observacao
    };
  
    setPedidoCompleto(novoPedido);
  
    // Recupera os pedidos existentes do localStorage ou cria um array vazio
    const listaDePedidos = JSON.parse(localStorage.getItem('meuPedido')) || [];
  
    // Adiciona o novo pedido à lista
    listaDePedidos.push(novoPedido);
  
    // Salva a lista atualizada de volta no localStorage
    localStorage.setItem('meuPedido', JSON.stringify(listaDePedidos));
  
    handleClose();
  };



  return (
    <>
      <Card sx={{ display: 'flex', alignItems: 'center', margin: '16px', height: '100%', width: '100%' }}>
        <CardMedia
          component="img"
          sx={{ width: 140, height: '100%' }}
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
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
              serve {item.serve} pessoa
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
          <TextField
            label="Observações"
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            placeholder="Adicione uma observação ao seu pedido"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />
        </DialogContent>
        <DialogContent sx={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ width: '90%' }}>
            Adicionar R$ {totalCost.toFixed(2)}
          </Button>
        </CardActions>
      </Dialog>
    </>
  );
};

export default MenuItemCard;
