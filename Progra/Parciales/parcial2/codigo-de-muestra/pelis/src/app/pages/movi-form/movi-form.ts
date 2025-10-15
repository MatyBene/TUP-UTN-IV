import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie-service';

@Component({
  selector: 'app-movi-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movi-form.html',
  styleUrl: './movi-form.css'
})
export class MoviForm {

    movieForm : FormGroup
    name : FormControl
    duration : FormControl
    director : FormControl

    constructor(public mService : MovieService){
      this.name = new FormControl('')
      this.duration = new FormControl('')
      this.director = new FormControl('')

      this.movieForm = new FormGroup({
        name : this.name,
        duration : this.duration,
        director : this.director
      })

    }

    manejarEnvio(){
      this.mService.postMovie(this.movieForm.value).subscribe({
        next: (data) => { console.log(data) },
        error: (e) => { console.log(e) }
      })
    }

}
