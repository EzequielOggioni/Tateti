import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhorcadoComponent } from './vista/ahorcado/ahorcado.component';
import { DibujaAhorcadoComponent } from './vista/dibuja-ahorcado/dibuja-ahorcado.component';

@NgModule({
  declarations: [
    AppComponent,
    AhorcadoComponent,
    DibujaAhorcadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
