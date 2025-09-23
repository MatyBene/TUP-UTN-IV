import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})


export class Header {
 
  // ---------------------- Input ----------------------
  // Formato viejo (con decoradores)
  // @Input()
  // mensaje : string = ''


  // Formato actual (con señales)
  // mensaje = input<string>('')


  // ---------------------- Output ----------------------
  // Formato viejo (con decoradores)
  // @Output()
  // enviarMensaje: EventEmitter<string> = new EventEmitter<string>

  // Formato actual (con señales)
  // enviarMensaje = output<string>()

  // Esto es igual para ambos formatos
  // mensaje: string = 'soy el mensaje que viaja del hijo al padre'

  // ejecutarEnvio(){
  //   this.enviarMensaje.emit(this.mensaje)
  // }
}


