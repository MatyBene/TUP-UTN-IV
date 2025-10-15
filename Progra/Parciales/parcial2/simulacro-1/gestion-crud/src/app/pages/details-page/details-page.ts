import { Component, OnInit } from '@angular/core';
import Product from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-details-page',
  imports: [],
  templateUrl: './details-page.html',
  styleUrl: './details-page.css'
})
export class DetailsPage implements OnInit{
  selectedProduct: Product | undefined;

  constructor(private route: ActivatedRoute, public pService: ProductService){}

  ngOnInit(): void {
      const productId = this.route.snapshot.params['id'];
      this.getProduct(productId);
  }

  getProduct(id: string){
    this.pService.getProduct(id).subscribe({
      next: (data) => {this.selectedProduct = data},
      error: (e) => {console.log(e)}
    })
  }
}
