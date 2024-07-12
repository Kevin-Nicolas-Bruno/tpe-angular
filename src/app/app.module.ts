import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { FormsModule } from '@angular/forms';
import { ConcesionariaContactoComponent } from './concesionaria-contacto/concesionaria-contacto.component';
import { ConcesionariaAutosComponent } from './concesionaria-autos/concesionaria-autos.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    InputIntegerComponent,
    CartComponent,
    ConcesionariaAutosComponent,
    ConcesionariaContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
