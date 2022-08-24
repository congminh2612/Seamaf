import React from 'react';
import CartContext from './Context';
import { useState, useEffect } from 'react';
import { Carts } from './Context';
import { Products } from './../interface';
import { useLocalStorage } from 'usehooks-ts';

interface propChildren {
  children: React.ReactNode;
}

const Provider: React.FC<propChildren> = ({ children }) => {
  const [productCarts, setProductsCarts] = useLocalStorage<Products[]>(
    'carts',
    []
  );

  return (
    <CartContext.Provider
      value={{ carts: productCarts, setCarts: setProductsCarts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
