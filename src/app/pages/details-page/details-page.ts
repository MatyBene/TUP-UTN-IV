import { Component, OnInit } from '@angular/core';
import Cliente from '../../models/Cliente';
import { ClientsService } from '../../services/clients-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  imports: [],
  templateUrl: './details-page.html',
  styleUrl: './details-page.css'
})
export class DetailsPage implements OnInit{
  selectedCliente: Cliente | undefined;

  constructor(public cService: ClientsService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const clienteId = this.route.snapshot.params['id'];
    this.showCliente(clienteId);
  }

  showCliente(id: string){
    this.cService.getCliente(id).subscribe({
      next: (data) => {this.selectedCliente = data},
      error: (e) => {console.log}
    })
  }
}
