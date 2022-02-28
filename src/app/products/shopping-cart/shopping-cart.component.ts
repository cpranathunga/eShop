import { Observable, of, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartStore } from './../../core/cart-store';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  cartItemsCount!: Observable<number>;
  subscription!: Subscription;
  cartSubTotal!: Observable<number>;
  cartItems!: Observable<any[]>;


  constructor(private cartStore: CartStore, private cartService: CartService) { }

  ngOnInit(): void {

    this.subscription = this.cartStore.state$.subscribe(state => {
      this.cartItemsCount = of(this.cartService.getCartItemsCount(state));
      this.cartSubTotal = of(this.cartService.getCartSubTotal(state));
      this.cartItems = of(this.cartService.getCartItems(state));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
