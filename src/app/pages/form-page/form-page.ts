import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients-service';

@Component({
  selector: 'app-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage {
  clienteForm: FormGroup;

  constructor(public cService: ClientsService, private fb: FormBuilder){
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', Validators.required],
      email: ['', [Validators.required, Validators.maxLength(300), Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(8)]],
      comentarios: ['', Validators.maxLength(200)]
    })
  }

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

  sendCliente(){
    this.cService.postCliente(this.clienteForm.value).subscribe({
      next: (data) => {
        alert('El cliente se ha creado con exito');
        this.clienteForm.reset();
      },
      error: (e) => {console.log(e)}
    })
  }


}
