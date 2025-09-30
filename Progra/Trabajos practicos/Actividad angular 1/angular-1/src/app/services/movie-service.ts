import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  movies: Movie[];

  constructor() {
    this.movies = [
      {
        name: "El señor de los anillos",
        duration: 300,
        director: "Peter Jackson"
      },
      {
        name: "Shrek",
        duration: 400,
        director: "Vicky Jenson"
      }
    ]
  }

  addMovie(m: Movie): void {
    this.movies.push(m);
  }

  buscarPeli(name: string){
    return this.movies.find((peli) => peli.name === name);
  }
}
