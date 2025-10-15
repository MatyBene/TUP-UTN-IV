import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MoviList } from './pages/movi-list/movi-list';
import { MoviForm } from './pages/movi-form/movi-form';
import { MovieDetails } from './pages/movie-details/movie-details';
import { MovieFormEdit } from './pages/movie-form-edit/movie-form-edit';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'movie-list', component: MoviList},
    {path: 'movie-list/:id', component: MovieDetails},
    {path: 'movie-list/edit/:id', component: MovieFormEdit },
    {path: 'movie-form', component: MoviForm}
];
