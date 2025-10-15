import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { DetailsPage } from './pages/details-page/details-page';
import { FormEditPage } from './pages/form-edit-page/form-edit-page';
import { FormPage } from './pages/form-page/form-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'product-list', component: ListPage},
    {path: 'product-list/:id', component: DetailsPage},
    {path: 'product-list/edit/:id', component: FormEditPage},
    {path: 'product-form', component: FormPage}
];
