import React, { useContext } from 'react';
import { Tab, Tabs, Box, Container, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import http from '../axios/Aixos';
import { useNavigate } from 'react-router-dom';
const Title = styled(Typography)(() => ({
  fontSize: '16px',
  color: '#fff',
  '&:hover': {
    color: '#f51167',
  },
}));
const Navbar = () => {
  const navigate = useNavigate();
  const value = useContext(AuthContext);
  console.log(value);
  function handleLogOut() {
    value.signOut(() => navigate('/'));
  }
  return (
    <nav
      style={{
        backgroundColor: '#111',
        display: 'flex',
      }}
    >
      <Container>
        <Box>
          <Link className="link" to="/">
            <Title>Home</Title>
          </Link>
          <Link className="link" to="/">
            <Title>Our Shop</Title>
          </Link>
          <Link className="link" to="/">
            <Title>On Sale</Title>
          </Link>
          <Link className="link" to="/">
            <Title>Out Services</Title>
          </Link>
          <Link className="link" to="/">
            <Title>Blog</Title>
          </Link>
          <Link className="link" to="/">
            <Title>Contact</Title>
          </Link>
          <Link className="link" to="/login">
            {value.user ? value.user.name : <Title>Login</Title>}
          </Link>
          {value.user ? (
            <Link className="link" to="">
              <Title onClick={handleLogOut}>Logout</Title>
            </Link>
          ) : (
            <Link className="link" to="/sign-up">
              <Title>Sign up</Title>
            </Link>
          )}
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
