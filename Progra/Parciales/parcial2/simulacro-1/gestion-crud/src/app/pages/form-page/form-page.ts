import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, public pService: ProductService){
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(10)]]
    })
  }

  get name() {
    return this.productForm.get('name')!;
  }

  get price() {
    return this.productForm.get('price')!;
  }

  get stock() {
    return this.productForm.get('stock')!;
  }

  sendProduct(){
    this.pService.postProduct(this.productForm.value).subscribe({
      next: (data) => {console.log(data)},
      error: (e) => {console.log(e)}
    });
    this.productForm.reset();
  }
}
