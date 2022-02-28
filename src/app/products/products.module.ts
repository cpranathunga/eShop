import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material.module';
import { CartService } from './cart.service';
import { CartItemCountComponent } from './cart-item-count/cart-item-count.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [

    ProductListComponent,
     CartItemCountComponent,
     ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ProductService, CartService]
})
export class ProductsModule { }
