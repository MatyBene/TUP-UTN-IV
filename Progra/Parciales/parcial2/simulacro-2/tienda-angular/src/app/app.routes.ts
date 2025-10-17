import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { FormPage } from './pages/form-page/form-page';
import { FormEditPage } from './pages/form-edit-page/form-edit-page';
import { DetailsPage } from './pages/details-page/details-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'productos', component: ListPage},
    {path: 'productos/nuevo', component: FormPage},
    {path: 'productos/:id/editar', component: FormEditPage},
    {path: 'productos/:id', component: DetailsPage}
];
