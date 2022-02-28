import { CartItem } from './cart-item';

export interface CartState {
  id: number;
  cartItems: CartItem[];
}

export const initialState = { id: 0, cartItems: [] };
