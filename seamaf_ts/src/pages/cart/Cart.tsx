import { Button, Grid, Stack, Typography, Box, Container } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import './style.css';
import React, { useContext } from 'react';
import CartContext from '../../store/Context';
import { ConstructionOutlined } from '@mui/icons-material';
import { Products } from '@/interface';
import { useLocalStorage } from 'usehooks-ts';

const Cart = () => {
  const { carts, setCarts } = useContext(CartContext);

  function handleDelete(id: number) {
    setCarts(carts.filter((item) => item.id !== id));
  }
  function handleDec(id: number) {
    carts[id].quantity += 1;
    setCarts([...carts]);
  }
  function handleInc(id: number) {
    if (carts[id].quantity > 0) {
      carts[id].quantity -= 1;
    }
    setCarts([...carts]);
  }
  const totals = carts.reduce((total, cart) => {
    return total + cart.price * cart.quantity;
  }, 0);
  return (
    <Box pt="105px" pb="105px">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="cart-table">
              <h3>Your Cart</h3>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th className="product-th" style={{ width: '250px' }}>
                        Product
                      </th>
                      <th className="quy-th" style={{ width: '220px' }}>
                        Quantity
                      </th>
                      <th className="size-th" style={{ width: '70px' }}>
                        Size
                      </th>
                      <th className="total-th">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.length > 0 &&
                      carts.map((cart, index) => {
                        return (
                          <tr key={cart.id}>
                            <td className="product-col">
                              <a href="/">
                                <img src={cart.images[0].path} alt="" />
                              </a>
                              <div className="pc-title">
                                <h4>{cart.name}</h4>
                                <p>${cart.price}.00</p>
                              </div>
                            </td>

                            <td className="quy-col">
                              <div className="quantity">
                                <div className="pro-qty">
                                  <span
                                    className="dec qtybtn"
                                    onClick={() => handleInc(index)}
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    name="quantity"
                                    value={cart.quantity}
                                    onChange={() => {}}
                                  />
                                  <span
                                    className="inc qtybtn"
                                    onClick={() => handleDec(index)}
                                  >
                                    +
                                  </span>
                                </div>
                                <button style={{ border: 'none' }}></button>
                              </div>
                            </td>

                            <td className="size-col">
                              <h4 style={{ textAlign: 'center' }}>L</h4>
                            </td>
                            <td className="total-col">
                              <h4 style={{ textAlign: 'center' }}>
                                ${cart.price * cart.quantity}.00
                              </h4>
                            </td>

                            <td
                              className="remove-icon"
                              style={{ width: '30px' }}
                            >
                              <Button
                                onClick={() => handleDelete(cart.id)}
                                sx={{
                                  marginTop: '-4px',
                                  backgroundColor: 'transparent',
                                  '&:hover': {
                                    backgroundColor: 'transparent',
                                  },
                                }}
                              >
                                <DeleteForeverSharpIcon
                                  color="error"
                                  sx={{
                                    marginLeft: '10px',
                                  }}
                                ></DeleteForeverSharpIcon>
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="total-cost">
                <h6>
                  Total<span>${totals}.00</span>
                </h6>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <form className="promo-code-form">
                <input type="text" placeholder="Enter promo code" />
                <button>Submit</button>
              </form>
            </div>
            <a href="./" className="site-btn">
              Proceed to checkout
            </a>
            <a href="./" className="site-btn sb-dark">
              Continue shopping
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
