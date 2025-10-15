import { Injectable } from '@angular/core';
import Movie from '../models/Movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  readonly API_URL = "http://localhost:3000/movies"

  movies : Movie[]


  constructor(private http: HttpClient){
    this.movies = []
  }

  getMovies(){
    return this.http.get<Movie[]>(this.API_URL)
  }

  getMovie(id : string){
    return this.http.get<Movie>(`${this.API_URL}/${id}`)
  }
  
  postMovie(m : Movie){
    return this.http.post<Movie>(this.API_URL, m)
  }

  deleteMovie(id : string){
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }

   updateMovie(movie: Movie) {
    return this.http.put<Movie>(`${this.API_URL}/${movie.id}`, movie);
  }

  
}
