import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';

Footer;
const Layout = () => {
  console.log('layout render');
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
