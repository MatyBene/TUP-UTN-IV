import { Routes } from '@angular/router';
import { MovieList } from './pages/movie-list/movie-list';
import { Home } from './pages/home/home';
import { MovieForm } from './pages/movie-form/movie-form';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'movie-list', component: MovieList},
    {path: 'movie-form', component: MovieForm}
];
