import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import Movie from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails {

  selectedMovie: Movie | undefined;

  constructor(private route: ActivatedRoute, private mService: MovieService){
    const movieName = route.snapshot.params['movieName'];
    this.selectedMovie = mService.buscarPeli(movieName);
  }
}
