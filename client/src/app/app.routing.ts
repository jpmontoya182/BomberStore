import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { InventarioComponent } from "./components/inventario.component";

const appRoutes : Routes = [
    // home
    {path : '', component : HomeComponent },
    // inventario
    {path : 'inventario', component: InventarioComponent}

];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);