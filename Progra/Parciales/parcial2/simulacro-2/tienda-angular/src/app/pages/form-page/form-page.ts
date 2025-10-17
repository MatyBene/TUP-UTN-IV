import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      category: ['', Validators.required]
    })
  }

  get name(){
    return this.productForm.get('name')!;
  }

  get price(){
    return this.productForm.get('price')!;
  }

  get category(){
    return this.productForm.get('category')!;
  }

  sendProduct(){
    this.pService.postProduct(this.productForm.value).subscribe({
      next: (data) => {
        alert('El producto fue creado con exito');
        this.productForm.reset();
        console.log(data);
      },
      error: (e) => {console.log(e)}
    })
  }
}
