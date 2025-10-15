import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-form-edit-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-page.html',
  styleUrl: './form-edit-page.css'
})
export class FormEditPage implements OnInit{
  productForm!: FormGroup;
  productId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pService: ProductService
  ){}

  get name() {
    return this.productForm.get('name')!;
  }

  get price() {
    return this.productForm.get('price')!;
  }

  get stock() {
    return this.productForm.get('stock')!;
  }

  ngOnInit(): void {
      this.productId = this.route.snapshot.params['id'];

      this.productForm = this.fb.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        stock: ['', [Validators.required, Validators.min(10)]]
      });

      this.pService.getProduct(this.productId).subscribe({
        next: (data) => {this.productForm.patchValue(data)},
        error: (e) => {console.log(e)}
      });
  }

  sendProduct(){
    const updatedProduct = {
      ...this.productForm.value,
      id: this.productId
    };
    
    this.pService.updateProduct(updatedProduct).subscribe({
      next: () => {
        alert('Producto editado correctamente.');
        this.router.navigate(['/product-list']);
      },
      error: (e) => {console.log(e)}
    })
  }
}
