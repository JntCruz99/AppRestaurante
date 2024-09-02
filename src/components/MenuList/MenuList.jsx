import React from 'react';
import MenuItemCard from '../MenuItemCard';
import { Grid, Container, Typography } from '@mui/material';

const menuItems = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Pizza deliciosa.',
      price: 15.90,
      image: 'https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg',
      serve: 1,
      categoria: 'Pratos Principais',
      Itens: [
        {
          nome: 'Borda',
          obrigatorio: 1,
          maximo: 1,
          opcoes: [
            { nome: 'Catupiry', preco: 2.00 },
            { nome: 'Cheddar', preco: 2.50 },
            { nome: 'Calabresa', preco: 3.00 }
          ]
        },
        {
          nome: 'Sabores',
          obrigatorio: 1,
          maximo: 2,
          opcoes: [
            { nome: 'Calabresa' },
            { nome: 'Frango com Catupiry' },
            { nome: 'Quatro Queijos' }
          ]
        }
      ]
    },
    // Adicione a categoria para os outros itens também
    {
      id: 2,
      name: 'Hambúrguer Clássico',
      description: 'Hambúrguer com carne, queijo, alface e tomate.',
      price: 12.50,
      image: 'https://originalexperience.com.br/wp-content/uploads/2023/11/Revisitando-receitas-de-hamburgueres-classicos-e-seus-acompanhamentos.jpg',
      serve: 1,
      categoria: 'Pratos Principais',
      Itens: [
        {
          nome: 'Adicionais',
          obrigatorio: 0,
          maximo: 3,
          opcoes: [
            { nome: 'Bacon', preco: 1.50 },
            { nome: 'Queijo Extra', preco: 2.00 },
            { nome: 'Molho Especial', preco: 1.00 }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Salada Caesar',
      description: 'Salada Caesar com frango grelhado, croutons e parmesão.',
      price: 18.90,
      image: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/28/whatsapp-image-2023-02-28-at-01-53-47-(1)-1iyhprrq5e9tc.jpeg',
      serve: 1,
      categoria: 'Saladas',
      Itens: [
        {
          nome: 'Molho',
          obrigatorio: 1,
          maximo: 1,
          opcoes: [
            { nome: 'Molho Caesar' },
            { nome: 'Molho Ranch' },
            { nome: 'Molho de Mostarda e Mel' }
          ]
        },
        {
          nome: 'Adicionais',
          obrigatorio: 0,
          maximo: 2,
          opcoes: [
            { nome: 'Queijo Parmesão Extra', preco: 2.00 },
            { nome: 'Frango Grelhado Extra', preco: 3.50 }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Suco Natural',
      description: 'Suco natural de frutas frescas.',
      price: 6.00,
      image: 'https://joysushi.com.br/wp-content/uploads/2020/07/Sucos-Naturais-1170x780.jpg',
      serve: 1,
      categoria: 'Bebidas',
      Itens: [
        {
          nome: 'Sabor',
          obrigatorio: 1,
          maximo: 1,
          opcoes: [
            { nome: 'Laranja' },
            { nome: 'Limão' },
            { nome: 'Maracujá' },
            { nome: 'Acerola' }
          ]
        },
        {
          nome: 'Açúcar',
          obrigatorio: 1,
          maximo: 1,
          opcoes: [
            { nome: 'Com Açúcar' },
            { nome: 'Sem Açúcar' },
            { nome: 'Adoçante' }
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'Risoto de Frango',
      description: 'Risoto de frango com cogumelos e queijo parmesão.',
      price: 22.00,
      image: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/risoto-de-frango.jpg',
      serve: 2,
      categoria: 'Pratos Principais',
      Itens: [
        {
          nome: 'Adicionais',
          obrigatorio: 0,
          maximo: 2,
          opcoes: [
            { nome: 'Cogumelos Extras', preco: 3.00 },
            { nome: 'Parmesão Extra', preco: 2.50 },
            { nome: 'Molho de Tomate', preco: 1.50 }
          ]
        }
      ]
    }
  ];

const MenuList = () => {

    const categorizedItems = menuItems.reduce((acc, item) => {
        (acc[item.categoria] = acc[item.categoria] || []).push(item);
        return acc;
      }, {});
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cardápio
      </Typography>
      {Object.entries(categorizedItems).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '24px' }}>
          <Typography variant="h5" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {items.map((item) => (
              <Grid item xs={12} sm={12} md={6} key={item.id}>
                <MenuItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default MenuList;
