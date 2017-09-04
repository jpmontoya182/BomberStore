import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

const appRoutes : Routes = [
    { path : '', component: HomeComponent }, 
    // categorias
    { path : 'categories/:page', component: CategoryListComponent }
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);