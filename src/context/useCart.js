import { useContext } from 'react';
import { CartContext } from './CartContextOnly';

export const useCart = () => useContext(CartContext);
