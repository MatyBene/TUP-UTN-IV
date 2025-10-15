import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Router, RouterLink } from '@angular/router';
import Movie from '../../models/Movie'

@Component({
  selector: 'app-movi-list',
  imports: [RouterLink],
  templateUrl: './movi-list.html',
  styleUrl: './movi-list.css'
})
export class MoviList implements OnInit{

  constructor(
    public mService : MovieService,
    private router : Router){}

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.mService.getMovies().subscribe({
      next: (data) => { this.mService.movies = data},
      error: (e) => { console.log(e)}
    })
  }

  deleteMovie(id : string){
    this.mService.deleteMovie(id).subscribe({
      next: (data) => { 
        console.log(data),
      this.getMovies() },
      error: (error) => { console.log(error) }
    })
  }

   editar(movie: Movie) {
    this.router.navigate(['/movie-list/edit', movie.id]);
  }
}
