import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() prodObj!: Iproduct;

  constructor(
    private _productService: ProductsService,
    private _snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
  }

  onInProgress() {
    this._productService.markInProgress(this.prodObj).subscribe({
      next: res => {
        this._snackbarService.showAlert(res)
      },
      error: err => {}
    })
  }

  onDispatched() {
    this._productService.markDispatched(this.prodObj).subscribe({
      next: res => {
        this._snackbarService.showAlert(res)
      },
      error: err => {}
    })
  }

  onDelivered() {
    this._productService.markDelivered(this.prodObj).subscribe({
      next: res => {
        this._snackbarService.showAlert(res)
      },
      error: err => {}
    })
  }

}
