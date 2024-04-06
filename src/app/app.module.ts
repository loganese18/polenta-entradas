import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradasComponent } from './homepage/entradas/entradas.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { PuestasComponent } from './homepage/puestas/puestas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    EntradasComponent,
    PuestasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [HomepageComponent],
})
export class AppModule {}
