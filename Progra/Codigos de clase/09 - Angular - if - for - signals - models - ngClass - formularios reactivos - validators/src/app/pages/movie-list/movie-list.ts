import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-movie-list',
  imports: [Header, Footer],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {

}
