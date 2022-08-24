import ProductList from '../../component/product/productList/ProductList';
import React, { useEffect } from 'react';
import LastProduct from '../../component/product/productLastest/LastProduct';
import axios from 'axios';
import { useState, useReducer, useRef } from 'react';
import { Products } from '@/interface';
import Loading from '../../component/loading/Loading';
import useProduct from '../../hook/useFetch';
const Home = () => {
  const baseURL = import.meta.env.VITE_API_BASE as string;
  return (
    <>
      <LastProduct />
      <ProductList />
    </>
  );
};

export default Home;
