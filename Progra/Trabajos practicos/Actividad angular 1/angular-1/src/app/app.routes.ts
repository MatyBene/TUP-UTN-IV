import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieForm } from './pages/movie-form/movie-form';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'movie-form', component: MovieForm},
    {path: 'movie-list', component: MovieList},
    {path: 'movie-list/:movieName', component: MovieDetails}
];
