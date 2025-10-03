import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { FormPage } from './pages/form-page/form-page';
import { DetailsPage } from './pages/details-page/details-page';
import { FormEditPage } from './pages/form-edit-page/form-edit-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'list', component: ListPage},
    {path: 'list/:id-product', component: DetailsPage},
    {path: 'form', component: FormPage},
    {path: 'edit/:id-product', component: FormEditPage}
];
