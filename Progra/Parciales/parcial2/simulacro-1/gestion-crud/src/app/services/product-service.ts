import { Injectable } from '@angular/core';
import Product from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly URL = "http://localhost:3001/productos";

  products: Product[];

  constructor(private http: HttpClient){
    this.products = [];
  }

  getProducts(){
    return this.http.get<Product[]>(this.URL);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

  postProduct(p: Product){
    return this.http.post<Product>(this.URL, p);
  }

  updateProduct(p: Product){
    return this.http.put<Product>(`${this.URL}/${p.id}`, p);
  }

  deleteProduct(id: string){
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
}
