import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [

    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
