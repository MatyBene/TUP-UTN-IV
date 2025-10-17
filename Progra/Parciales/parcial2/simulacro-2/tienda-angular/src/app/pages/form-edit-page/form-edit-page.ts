import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import Product from '../../models/Product';

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

  get name(){
    return this.productForm.get('name')!;
  }

  get price(){
    return this.productForm.get('price')!;
  }

  get category(){
    return this.productForm.get('category')!;
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0), Validators.max(500000)]],
      category: ['', Validators.required]
    });

    this.pService.getProduct(this.productId).subscribe({
      next: (data) => {this.productForm.patchValue(data)},
      error: (e) => {console.log(e)}
    })
  }

  sendProduct(){
    const updateProduct = {
      ...this.productForm.value,
      id: this.productId
    };

    this.pService.putProduct(updateProduct).subscribe({
      next: (data) => {
        alert('El producto fue actualizado');
        this.router.navigate(['/productos']);
      },
      error: (e) => {console.log(e)}
    })
  }
}
