import { Products } from '../interface';
import { createContext } from 'react';

export interface Carts extends Products {
  quantity: number;
}
interface CartContext {
  carts: Products[];
  setCarts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const initCartContext = {
  carts:[],
  setCarts: () => {},
};

const CartContext = createContext<CartContext>(initCartContext);
export default CartContext;
