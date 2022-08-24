import React, { useState, useContext } from 'react';
import { Box, Container } from '@mui/system';
import {
  Grid,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Badge,
} from '@mui/material';
import { Input } from '@mui/material';
import { styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import CartContext from '../../store/Context';
const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '25px',
    border: 'none',
    zIndex: '-200',
    backgroundColor: '#ccc',
  },
  '& input': {
    paddingTop: '11px',
    paddingBottom: '11px',
  },
}));
// const Select =styled(Select)(()=>({
//   '& fieldset':{
//     border: 'none',
//   }
// }))

const Header = () => {
  const { carts, setCarts } = useContext(CartContext);
  const [count, setCount] = useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setCount(event.target.value);
  };
  return (
    <Box pt={2.25} pb={1.75}>
      <Container>
        <Stack>
          <Grid container>
            <Grid item xs={2}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: 24,
                  color: '#111111',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                RVM SeaMaf
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <SearchBox placeholder="Search on RVM SeaMaf..." fullWidth />
            </Grid>
            <Grid item xs={4}>
              <Box
                ml={2}
                mt="10px"
                sx={{
                  display: 'flex',
                }}
              >
                <FormControl>
                  <Select
                    autoWidth
                    value={count}
                    onChange={handleChange}
                    multiline={false}
                    variant="standard"
                    disableUnderline
                  >
                    <MenuItem value={1}>U.S Dollar</MenuItem>
                    <MenuItem value={2}>RTGS Dollar</MenuItem>
                    <MenuItem value={3}>SA Rand</MenuItem>
                    <MenuItem value={4}>British Pound</MenuItem>
                  </Select>
                </FormControl>

                <Box
                  sx={{
                    display: 'flex',
                    marginLeft: '10px',
                    marginTop: '2px',
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      color: '#111',
                    }}
                  ></FavoriteIcon>
                  <Typography ml={0.5} variant="subtitle1">
                    Whistlist
                  </Typography>
                </Box>

                <Link
                  to="/cart"
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      marginLeft: '10px',
                      marginTop: '2px',
                    }}
                  >
                    <Badge badgeContent={carts?.length} color="error">
                      <ShoppingCartIcon
                        sx={{
                          color: '#111',
                        }}
                      ></ShoppingCartIcon>
                    </Badge>
                    <Typography ml={0.5} variant="subtitle1">
                      Shopping Cart
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
