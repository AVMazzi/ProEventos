<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> f95937d16223ce584ff9f7fa8cc95cde9d55b7d3
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
=======
>>>>>>> f95937d16223ce584ff9f7fa8cc95cde9d55b7d3

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
<<<<<<< HEAD
      PalestrantesComponent,
      NavComponent
=======
      PalestrantesComponent
>>>>>>> f95937d16223ce584ff9f7fa8cc95cde9d55b7d3
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule
=======
    BrowserAnimationsModule
>>>>>>> f95937d16223ce584ff9f7fa8cc95cde9d55b7d3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
