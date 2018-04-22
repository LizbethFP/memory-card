import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { NgArrayPipesModule } from 'ngx-pipes';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // cargamos el módulo en el array de imports
    NgArrayPipesModule // cargamos el módulo de shuffle en array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
