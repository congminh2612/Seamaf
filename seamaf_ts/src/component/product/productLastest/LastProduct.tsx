import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import ProductItem from '../productItem/ProductItem';
import { Products } from '@/interface';
import useFetch from '../../../hook/useFetch';
import Loading from '../../loading/Loading'

interface Props {
  lastProduct: Products[];
}

const LastProduct: React.FC = () => {
  const baseURL = import.meta.env.VITE_API_BASE as string;
  const { data, error } = useFetch<Products[]>(`${baseURL}/products/last-product`);
  console.log(data);
  
  if (error) console.log(error);
  if (!data) return <Loading />;
  return (
    <Box pt={2.5} pb={2.5}>
      <Container>
        <Box>
          <Typography
            mt={2}
            mb={2}
            variant="h3"
            align="center"
            sx={{
              color: '#111',
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            LATEST PRODUCTS
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {data.length > 0 &&
            data.map((item) => {
              return (
                <Grid key={item.id} item xs={3}>
                  <ProductItem product={item} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default LastProduct;
