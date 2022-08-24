import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useParams } from 'react-router-dom';
import { Products } from '../../interface';
import axios from 'axios';
import ProductItem from '../../component/product/productItem/ProductItem';
import styled from '@emotion/styled';

const InputCount = styled(TextField)(() => ({
  width: '90px',
  margin: '2px 10px 0 10px',

  '& input': {
    padding: '6px 12px',
    paddingLeft: '40px',
  },
  '& fieldset': {
    borderRadius: '25px',
  },
}));

const ProductDetail = () => {
  //get productList
  const baseURL = import.meta.env.VITE_API_BASE as string;
  const [products, setProducts] = useState<Products[]>([]);
  const [relatedProduct, setRelatedProduct] = useState<Products[]>([]);

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    const getProductList = async () => {
      const res = await axios.get(`${baseURL}/products`);
      setProducts(res.data);
    };
    getProductList();
  }, []);

  const params = useParams<{ productId: string }>();
  const product = products.find(
    (item) => item.id.toString() === params.productId
  );
  console.log();
  
  useEffect(() => {
    const getRelatedProductList = async () => {
      if (!product?.category_id) return;
      try {
        const res = await axios.get(
          `${baseURL}/products/relate-products/${product?.category_id}`
        );
        setRelatedProduct(res.data);
      } catch (error) {}
    };
    getRelatedProductList();
  }, [product ?.category_id]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <>
      <Box
        sx={{
          background: '#f8f7f7',
          padding: '20px 0 10px',
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              color: '#414141',
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            FINDINGS
          </Typography>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Link to="/">
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Home
              </Typography>
            </Link>
            <Typography>/</Typography>
            <Link to="/cart">
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Shop
              </Typography>
            </Link>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box pb={6}>
            <Link to="/">
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#414141',
                }}
              >
                {' '}
                Back to Categories
              </Typography>
            </Link>
          </Box>
          <Stack>
            <Grid container spacing={4}>
              <Grid
                height="800px"
                item
                xs={6}
                sx={{
                  backgroundImage: `url(${product?.images[0].path})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  padding: 0,
                }}
              ></Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#414141',
                    textTransform: 'uppercase',
                    marginBottom: '18px',
                  }}
                >
                  {product?.name}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 24,
                    color: '#414141',
                    fontWeight: 700,
                    marginBottom: '20px',
                  }}
                >
                  ${product?.price}.00
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#414141',
                    marginBottom: '10px',
                  }}
                >
                  Availability:
                  <span style={{ color: '#f51167' }}>In stock</span>
                </Typography>
                <FormControl>
                  <Box
                    sx={{
                      marginTop: '10px',
                      position: 'relative',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: '#414141',
                        paddingTop: '10px',
                        fontSize: 14,
                        textTransform: 'uppercase',
                      }}
                    >
                      Quantity
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        position: 'absolute',
                        top: -2,
                        left: 100,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: 28,
                          cursor: 'pointer',
                        }}
                      >
                        -
                      </Typography>
                      <InputCount value={1}></InputCount>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: 28,
                          cursor: 'pointer',
                        }}
                      >
                        +
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        marginTop: '30px',
                        backgroundColor: '#f51167',
                        width: '200px',
                        padding: '12px 8px',
                        borderRadius: '20px',
                        '&:hover': {
                          backgroundColor: '#f51167',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#fff',
                          fontWeight: 400,
                        }}
                      >
                        Add to cart
                      </Typography>
                    </Button>
                  </Box>
                </FormControl>

                <Box
                  sx={{
                    marginTop: '40px',
                  }}
                >
                  <Accordion
                    elevation={0}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Description
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{product?.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Detail
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {' '}
                        90-60-90
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container>
          <Typography
            align="center"
            variant="h3"
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              marginTop: '30px',
            }}
          >
            RELATED PRODUCTS
          </Typography>
          <Stack mt={4} mb={4}>
            <Grid container spacing={2}>
              {relatedProduct.length > 0 &&
                relatedProduct.map((item) => {
                  return (
                    <Grid key={item.id} item xs={3}>
                      <ProductItem product={item} />
                    </Grid>
                  );
                })}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetail;
