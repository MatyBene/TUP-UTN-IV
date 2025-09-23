import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-movie-form',
  imports: [Header, Footer],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {

}
