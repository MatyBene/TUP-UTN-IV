import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Router, RouterLink } from '@angular/router';
import Product from '../../models/Product';
import { Filter } from "../../components/filter/filter";

@Component({
  selector: 'app-list-page',
  imports: [RouterLink, Filter],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css'
})
export class ListPage implements OnInit{
  searchTerm: string = '';

  constructor(public pService: ProductService, private router: Router){}

  ngOnInit(): void {
      this.listProducts();
  }

  listProducts(){
    this.pService.getProducts().subscribe({
      next: (data) => {this.pService.products = data},
      error: (e) => {console.log(e)}
    })
  }

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  get filteredProducts(): Product[] {
    if (this.searchTerm.trim() === '') {
      return this.pService.products;
    }
    return this.pService.products.filter(product => 
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  removeProduct(id: string){
    this.pService.deleteProduct(id).subscribe({
      next: (data) => {
        alert('El producto fue eliminado con exito.');
        this.listProducts();
      },
      error: (e) => {console.log(e)}
    })
  }

  editProduct(p: Product){
      this.router.navigate([`/productos/${p.id}/editar`]);
  }
}
