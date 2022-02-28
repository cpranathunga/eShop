import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CartState } from '../models/cart-state';
import { createSelector } from 'reselect';
import { Product } from '../models/product';
import { CartStore } from '../core/cart-store';

@Injectable()
export class CartService {

  constructor(private cartStore: CartStore) { }

  //get array of cart items
  getCartItems = (sate: CartState) => sate.cartItems;

  //add product to cart store
  addToCart(product: Product, quantity: number) {
    const cartItemToAdd = {
      ...product,
      quantity,
      itemTotal: product.price * quantity
    };
    this.cartStore.addCartItem(cartItemToAdd);
    return of(cartItemToAdd);
  }

  //get cart item count pure function
  getCartItemsCount = (state: CartState) => {
    const cartItems = state.cartItems;
    const totalCartCount = cartItems.reduce(
      (totalCount, currentItem) => totalCount + currentItem.quantity, 0
    );
    return totalCartCount;
  };

  //get subtotal via reselect
  getCartSubTotal = createSelector(
    this.getCartItems,
    items =>
      items.reduce(
        (subTotal, currentItem) => subTotal + currentItem.itemTotal, 0)
  );

}
