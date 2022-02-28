import { CartService } from './../cart.service';
import { CartStore } from './../../core/cart-store';
import { Observable, of, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item-count',
  templateUrl: './cart-item-count.component.html',
  styleUrls: ['./cart-item-count.component.scss']
})
export class CartItemCountComponent implements OnInit, OnDestroy {

  totalItemsInCart$!: Observable<number>;
  subscription!: Subscription;

  constructor(private cartStore: CartStore, private cartService: CartService) { }

  ngOnInit(): void {
    //subscribe to cartStore and assign to totalItemsInCart$
    this.subscription = this.cartStore.state$.subscribe(state => {
      this.totalItemsInCart$ = of(this.cartService.getCartItemsCount(state));
    });
  }

  clearItemsInCart() {
    this.cartStore.clearCart();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
