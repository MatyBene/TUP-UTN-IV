import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import Movie from '../../models/Movie'

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails implements OnInit{

  selectMovie : Movie | undefined

  constructor(
    private route : ActivatedRoute, 
    public mService : MovieService){}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id']
    this.getUser(movieId)
  }

  getUser(id : string){
    this.mService.getMovie(id).subscribe({
      next: (data) => { this.selectMovie = data},
      error: (e) => { console.log(e)}
    })
  }

}
