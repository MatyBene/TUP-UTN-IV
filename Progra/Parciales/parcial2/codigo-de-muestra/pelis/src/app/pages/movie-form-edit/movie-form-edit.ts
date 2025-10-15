// movie-form-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie-service';
import  Movie  from '../../models/Movie';

@Component({
  selector: 'app-movie-form-edit',
  imports: [ReactiveFormsModule], 
  templateUrl: './movie-form-edit.html',
  styleUrls: ['./movie-form-edit.css']
})
export class MovieFormEdit implements OnInit {
  movieForm!: FormGroup;
  movieId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];

    this.movieForm = this.fb.group({
      id: [''],
      name: [''],
      duration: [''],
      director: ['']
    });

    this.movieService.getMovie(this.movieId).subscribe(movie => {
      this.movieForm.patchValue(movie);
    });
  }

  onSubmit() {
    const updatedMovie: Movie = this.movieForm.value;
    this.movieService.updateMovie(updatedMovie).subscribe(() => {
      alert('Película actualizada correctamente');
      this.router.navigate(['/movie-list']);
    });
  }
}
