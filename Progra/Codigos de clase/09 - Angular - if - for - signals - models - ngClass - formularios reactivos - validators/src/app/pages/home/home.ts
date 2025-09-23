import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Product from '../../models/Product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, NgClass, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  // Parte 1 - @if y @for//
  // booleano : boolean = false
  // arregloPelis: any[] = [
  //   {
  //     id: 1,
  //     nombre: 'Shrek'
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Los Vengadores'
  //   }
  // ]


  ///////////////////////////////////////////////////////////////////////////////////////////////////////


  // Parte 2: Input y Output Signals
    
  // ---------------------- Input ----------------------
  // mensajeAEnviar: string = 'soy el mensaje enviado del padre al hijo'


  // ---------------------- Output ----------------------
  // mensajeRecibido: string = ''

  // recibirMensaje(e: string){
  //   this.mensajeRecibido = e
  // }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////


  //Parte 3: Models + Constructor
  // producto: Product

  // constructor(){
  //   this.producto = {
  //     nombre: 'silla gamer',
  //     precio: 540000,
  //     disponible: true
  //   }
  // }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////


  //Parte 4: ngClass
  // esOscuro: boolean = true

  // cambiarModo(){
  //   this.esOscuro = !this.esOscuro
  // }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////


  //Parte 5 - Formularios Reactivos + Validators

  // movieForm: FormGroup
  // name: FormControl
  // duration: FormControl
  // director: FormControl

  // constructor(){
  //   this.name = new FormControl('', Validators.required)
  //   this.duration = new FormControl('', [
  //     Validators.required, Validators.max(300)])
  //   this.director = new FormControl('')

  //   this.movieForm = new FormGroup({
  //     nameF : this.name,
  //     durationF : this.duration,
  //     directorF : this.director
  //   })
  // }

  // verSubmit(){
  //   console.log(this.movieForm.value)
  // }

  
}


