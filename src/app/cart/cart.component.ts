import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../car-list/car';
import { CarCartService } from '../car-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$ : Observable<Car[]>;
//trackByCarModel: TrackByFunction<Car>;
trackByCarQuantity(index: number, car: Car): number {
  return car.quantity;
}
  constructor(private cart : CarCartService){
    //cart.cartList.subscribe(c => this.cartList$ = c);
    this.cartList$ = cart.cartList.asObservable();
  }
}//clase 7 1:04:05
