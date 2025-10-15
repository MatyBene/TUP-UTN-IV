import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import Product from '../../models/Product';

@Component({
  selector: 'app-list-page',
  imports: [RouterLink],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css'
})
export class ListPage implements OnInit{

  constructor(public pService: ProductService, private router: Router){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this.pService.getProducts().subscribe({
      next: (data) => {this.pService.products = data},
      error: (e) => {console.log(e);
      }
    })
  }

  editProduct(p: Product){
    this.router.navigate(['/product-list/edit', p.id]);
  }

  removeProduct(id: string){
    this.pService.deleteProduct(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getProducts();
      },
      error: (e) => {console.log(e)}
    })
  }
}
