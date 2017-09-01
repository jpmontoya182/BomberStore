import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { appRoutingProviders, routing } from './app.routing';

import { HomeComponent } from './components/home.component';
import { InventarioComponent } from './components/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule, 
    // inyectamos el boostrap en la aplicacion
    NgbModule.forRoot(),
    FormsModule, 
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
