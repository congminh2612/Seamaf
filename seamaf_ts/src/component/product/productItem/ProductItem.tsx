import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  Paper,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderSharp';
import React from 'react';
import { useContext, useEffect } from 'react';
import { Products } from '../../../interface';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../../../store/Context';
import axios from 'axios';
import styled from '@emotion/styled';
import { motion, Transition } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { useLocalStorage } from 'usehooks-ts';

const ButtonAdd = styled(Button)(() => ({
  background: '#fff',
  padding: '4px 0',
  minWidth: 24,
  '&:hover': {
    backgroundColor: '#ccc',
  },
}));

const ButtonLike = styled(Button)(() => ({
  backgroundColor: '#fff',
  marginTop: 10,
  marginLeft: 0,
  padding: '4px 0',
  minWidth: 24,
  '&:hover': {
    backgroundColor: '#ccc',
  },
}));

const Title = styled(Typography)(() => ({
  position: 'absolute',
  width: 100,
  right: 15,
  top: 30,
  color: '#fff',
  fontSize: 14,
  display: 'none',
}));

interface Props {
  product: Products;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const { carts, setCarts } = useContext(CartContext);
  
  function handleAddToCart(id: number) {
    const index = carts.findIndex((item) => item.id === id);
    const newCarts = [...carts];

    if (index !== -1) {
      newCarts[index] = {
        ...newCarts[index],
        quantity: newCarts[index].quantity + 1,
      };
      
    } else {
      newCarts.push({ ...product, quantity: 1 });
      
    }
   toast.success(' Thêm sản phẩm vào giỏ hàng thành công ');
    setCarts(newCarts);
    
  }

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 262,
        position: 'relative',
      }}
    >
      <Link to={`/detail/${product.id}`}>
        <CardMedia
          component="img"
          height="262"
          image={product.images[0].path}
          alt="Paella dish"
        />
      </Link>
      <CardActions
        sx={{
          position: 'absolute',
          bottom: 70,
          right: 2,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box>
          <Toaster position="top-center" reverseOrder={false} />
          <ButtonAdd onClick={() => handleAddToCart(product.id)}>
            <ShoppingCartIcon
              sx={{
                color: '#111',
              }}
              fontSize="small"
            ></ShoppingCartIcon>
          </ButtonAdd>
          <Title>Add to cart</Title>
        </Box>

        <Box
          sx={{
            marginRight: 1,
          }}
        >
          <ButtonLike>
            <FavoriteIcon
              fontSize="small"
              sx={{
                color: 'red',
              }}
            ></FavoriteIcon>
          </ButtonLike>
        </Box>
      </CardActions>
      <CardActions
        sx={{
          justifyContent: 'space-between',
          marginTop: 1,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Typography>{product.name}</Typography>
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          {formatter.format(product.price)}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
