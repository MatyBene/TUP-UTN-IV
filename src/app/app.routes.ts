import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { DetailsPage } from './pages/details-page/details-page';
import { FormPage } from './pages/form-page/form-page';
import { EditFormPage } from './pages/edit-form-page/edit-form-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'clientes', component: ListPage},
    {path: 'clientes/nuevo', component: FormPage},
    {path: 'clientes/:id', component:DetailsPage},
    {path: 'clientes/:id/edit', component: EditFormPage}
]

