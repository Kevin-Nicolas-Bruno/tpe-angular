import { Component } from '@angular/core';
import { Car } from './car';
import { CarCartService } from '../car-cart.service';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  
  cars: Car[] = [
  {
    "brand" : "Ford",
    "model" : "Focus",
    "year": 2024,
    "price": 5000,
    "stock": 20,
    "image": "assets/img/ford focus 2024.jpg",
    "offer": false,
    "quantity":0 ,

  },
  {
    "brand" : "Ford",
    "model" : "KA",
    "year": 2024,
    "price": 3000,
    "stock": 0,
    "image": "assets/img/ford ka 2024.jpg",
    "offer": false,
    "quantity":0 ,

  }

]

constructor(private cart: CarCartService){

}

maxReached(m: string){
  console.log("Se llego al maximo");
}

addToCart(car:Car) :void{
  this.cart.addToCart(car);
  car.stock -= car.quantity;
  car.quantity = 0;
}

}
