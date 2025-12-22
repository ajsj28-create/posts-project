import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('productForm') productForm!: NgForm;

  constructor(
    private _uuidService: UuidService,
    private _productService: ProductsService,
    private _snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
  }

  onProductAdd() {
    if(this.productForm.valid){
      let obj = {...this.productForm.value, status: 'inprogress', id: this._uuidService.uuid()}
      this.productForm.reset()
      this._productService.postProduct(obj).subscribe({
        next: res => {
          this._snackbarService.showAlert(`Product with id ${res.id} added successfully !`)
        },
        error: err => {}
      })      
    }else{
      this._snackbarService.showAlert(`Fill all the required fields !`)
    }
  }

}
