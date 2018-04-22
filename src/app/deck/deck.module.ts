import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '.././app.component';
import { DeckComponent } from './deck.component';
// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { NgArrayPipesModule } from 'ngx-pipes';

@NgModule({
  declarations : [
    DeckComponent
  ],
  imports : [
    HttpClientModule, // cargamos el módulo en el array de imports
    NgArrayPipesModule // cargamos el módulo de shuffle en array
  ],
  exports: [
    DeckComponent
  ]
})

export class DeckModule { }