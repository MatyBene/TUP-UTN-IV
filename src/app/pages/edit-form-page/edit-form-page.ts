import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../services/clients-service';

@Component({
  selector: 'app-edit-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form-page.html',
  styleUrl: './edit-form-page.css'
})
export class EditFormPage implements OnInit {
  clienteForm!: FormGroup;
  clienteId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public cService: ClientsService
  ){}

  get nombre(){
    return this.clienteForm.get('nombre')!;
  }

  get empresa(){
    return this.clienteForm.get('empresa')!;
  }

  get email(){
    return this.clienteForm.get('email')!;
  }

  get telefono(){
    return this.clienteForm.get('telefono')!;
  }

  get comentarios(){
    return this.clienteForm.get('comentarios')!;
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.params['id'];

    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', Validators.required],
      email: ['', [Validators.required, Validators.maxLength(300), Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(8)]],
      comentarios: ['', Validators.maxLength(200)]
    })

    this.cService.getCliente(this.clienteId).subscribe({
      next: (data) => {this.clienteForm.patchValue(data)},
      error: (e) => {console.log(e)}
    })
  }

  sendCliente(){
    const updateCliente = {
      ...this.clienteForm.value,
      id: this.clienteId
    }

    this.cService.putCliente(updateCliente).subscribe({
      next: (data) => {
        alert('El cliente ha sido modificado con exito');
        this.router.navigate(['/clientes'])
      },
      error: (e) => {console.log(e)}
    })
  }
}
