import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients-service';
import { Router } from "@angular/router";
import Cliente from '../../models/Cliente';

@Component({
  selector: 'app-list-page',
  imports: [],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css'
})
export class ListPage implements OnInit {

  constructor(public cService: ClientsService, private router: Router){}

  ngOnInit(): void {
      this.showClientes();
  }

  showClientes(){
    this.cService.getClientes().subscribe({
      next: (data) => {this.cService.clientes = data},
      error: (e) => {console.log(e)}
    })
  }

  showCliente(id: string){
    this.router.navigate([`/clientes/${id}`]);
  }

  removeCliente(id: string){
    this.cService.deleteCliente(id).subscribe({
      next: (data) => {
        alert('El usuario fue eliminado con exito');
        this.showClientes();
      },
      error: (e) => {console.log(e)}
    })
  }

  editCliente(c: Cliente){
    this.cService.putCliente(c).subscribe({
      next: (data) => {this.router.navigate([`/clientes/${c.id}/edit`])},
      error: (e) => {console.log(e)}
    })
  }
}
