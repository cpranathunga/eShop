import { Injectable } from '@angular/core';
import { Store } from './store';
import { CartState, initialState } from '../models/cart-state';
import { CartItem } from '../models/cart-item';

@Injectable({ providedIn: 'root' })
export class CartStore extends Store<CartState>{
  [x: string]: any;

  constructor() {
    super(initialState);
  }

  addCartItem(cartItemToAdd: CartItem) {
    const newState = {
      ... this.state, //cartItems
      cartItems: ([] as CartItem[]).concat(this.state.cartItems, cartItemToAdd)
    };
    this.setState(newState);
  }

  clearCart() {
    const newState = initialState;
    this.setState(newState);
  }

  restoreCart(stateToRestore: CartState) {
    this.setState(stateToRestore);
  }

  removeCartItem(cartItemToRemove: CartItem) {
    const newState = {
      ... this.state, //cartItems
      cartItems: this.state.cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    };
    this.setState(newState);
  }

  updateCartItem(cartItemToUpdate: CartItem) {
    const newState = {
      ... this.state, //cartItems
      cartItems: this.state.cartItems.map(cartItem => cartItem.id === cartItemToUpdate.id ? cartItemToUpdate : cartItem)
    };
    this.setState(newState);
  }
}
