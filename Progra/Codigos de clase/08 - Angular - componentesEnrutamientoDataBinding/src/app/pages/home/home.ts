import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

    nombreUsuario: string = "Lucrecia"
    numero : number = 0
    booleano: boolean = true
    arregloPelis: any[] = [
      {
        id: 1,
        nombre: "Donde estan las rubias"
      },
      {
        id: 2,
        nombre: "Shrek"
      }
    ]

    sumarNumero(){
      this.numero++
    }
}
