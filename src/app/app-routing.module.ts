import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcesionariaAutosComponent } from './concesionaria-autos/concesionaria-autos.component';
import { CartComponent } from './cart/cart.component';
import { ConcesionariaContactoComponent } from './concesionaria-contacto/concesionaria-contacto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full'
  
  },
  {
    path: 'cars',
    component: ConcesionariaAutosComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'contacto',
    component: ConcesionariaContactoComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
