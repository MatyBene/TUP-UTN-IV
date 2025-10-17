import { Injectable } from '@angular/core';
import Cliente from '../models/Cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  readonly URL = 'http://localhost:3000/clientes';

  clientes: Cliente[];

  constructor(private http: HttpClient){
    this.clientes = [];
  }

  getClientes(){
    return this.http.get<Cliente[]>(this.URL);
  }

  getCliente(id: string){
    return this.http.get<Cliente>(`${this.URL}/${id}`);
  }

  postCliente(c: Cliente){
    return this.http.post<Cliente>(this.URL, c);
  }

  putCliente(c: Cliente){
    return this.http.put<Cliente>(`${this.URL}/${c.id}`, c);
  }

  deleteCliente(id: string){
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
}
