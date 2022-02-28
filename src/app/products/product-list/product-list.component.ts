import { Product } from './../../models/product';
import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnDestroy {

  productItems!: Product[];
  filteredProducts!: Product[];
  subscription!: Subscription;

  constructor(private productDataService: ProductService, private cartService: CartService) {
    //initialy load all products to productItems and filteredProducts
    this.subscription = this.productDataService.getAllProducts()
      .subscribe(products => this.filteredProducts = this.productItems = products);
  }

  filter(query: string) {
    //filter productItems and assigned to filteredProducts
    this.filteredProducts = (query) ? this.productItems
      .filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.productItems;
  }

  addItemToCart(product: Product) {
    this.cartService.addToCart(product, 1);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
