import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent implements OnInit {

  productsArray: Array<Iproduct> = [];

  constructor(
    private _productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this._productService.fetchAllProducts().subscribe({
      next: res => {
        this.productsArray = res
      },
      error: err => {}
    })
  }
  
}
