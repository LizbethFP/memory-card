import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameInfoComponent } from './gameinfo/gameinfo.component';
// import { DeckComponent } from './deck/deck.component';
// import { DeckModule } from './deck/deck.module';
// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { NgArrayPipesModule } from 'ngx-pipes';


@NgModule({
  declarations: [
    AppComponent,
    GameInfoComponent,
    // DeckComponent
  ],
  imports: [
    BrowserModule,
    // DeckModule,
    HttpClientModule, // cargamos el módulo en el array de imports
    NgArrayPipesModule // cargamos el módulo de shuffle en array
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
