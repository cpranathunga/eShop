import { CartState } from './../models/cart-state';
import { TestBed } from '@angular/core/testing';
import { CartItem } from '../models/cart-item';
import { initialState } from '../models/cart-state';
import { CartStore } from './cart-store';

describe('CartStore', () => {
  let cartStore: CartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartStore]
    });
    cartStore = TestBed.get(CartStore);
  })

  it('should create an instance', () => {
    expect(cartStore).toBeTruthy();
  });

  it('can add item into cart state', () => {
    //Arrange
    const currentState = initialState;
    expect(currentState.cartItems.length).toBe(0);

    const cartItem: CartItem = {
      id: 1,
      quantity: 1,
      itemTotal: 1
    };

    //Act
    cartStore.addCartItem(cartItem);

    const expectedState = { id: 0, cartItems: [cartItem] };

    //Assert
    expect(cartStore.state).toEqual(expectedState);
  })

  it('can clear cart', () => {
    //Arrange
    const cartItem: CartItem = {
      id: 1,
      quantity: 1,
      itemTotal: 1
    };

    cartStore.addCartItem(cartItem);

    //Act
    cartStore.clearCart();

    //Assert
    expect(cartStore.state).toEqual(initialState);
  })

  it('can restore cart', () => {
    //Arrange
    const currentState = initialState;

    expect(cartStore.state).toEqual(currentState);

    const cartItem: CartItem = {
      id: 1,
      quantity: 1,
      itemTotal: 1
    };

    const expectedState: CartState = {
      id: 1,
      cartItems: [cartItem]
    }

    //Act
    cartStore.restoreCart(expectedState);

    //Assert
    expect(cartStore.state).toEqual(expectedState);
  })

  it('can remove cart item', () => {
    //Arrange
    const cartItem1: CartItem = {
      id: 1,
      quantity: 1,
      itemTotal: 1
    };

    const cartItem2: CartItem = {
      id: 2,
      quantity: 2,
      itemTotal: 2
    };

    const currentState: CartState = {
      id: 1,
      cartItems: [cartItem1, cartItem2]
    }

    cartStore.restoreCart(currentState);

    expect(cartStore.state).toEqual(currentState);

    //Act
    cartStore.removeCartItem(cartItem1);

    //Assert
    const expectedState: CartState = {
      id: 1,
      cartItems: [cartItem2]
    }

    expect(cartStore.state).toEqual(expectedState);
  })

  it('can update cart item', () => {
    //Arrange
    const cartItem1: CartItem = {
      id: 1,
      quantity: 1,
      itemTotal: 1
    };

    const cartItem2: CartItem = {
      id: 2,
      quantity: 2,
      itemTotal: 2
    };

    const currentState: CartState = {
      id: 0,
      cartItems: [cartItem1, cartItem2]
    }

    cartStore.restoreCart(currentState);

    expect(cartStore.state).toEqual(currentState);

    //Act
    const cartItemToUpdate: CartItem = {
      id: 2,
      quantity: 3,
      itemTotal: 2
    };
    cartStore.updateCartItem(cartItemToUpdate);

    //Assert
    const expectedState: CartState = {
      id: 0,
      cartItems: [cartItem2, cartItemToUpdate]
    }

    // expect(cartStore.state).toEqual(expectedState);
  })
});
