import { Injectable } from '@angular/core';
import { Car } from './car-list/car';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CarCartService {
  
  private _cartList : Car[] = [];
  cartList: BehaviorSubject<Car[]> = new BehaviorSubject(this._cartList);

  constructor() { }
  
  addToCart(car : Car){
    let item = this._cartList.find((v1) =>v1.brand == car.brand);
    if(!item){
      this._cartList.push({... car});
    }else{
      item.quantity += car.quantity;
    }
    this.cartList.next(this._cartList);
  }

  removeCart(car:Car){
    this._cartList = this._cartList.filter(item => item.brand!==car.brand);
    this.cartList.next(this._cartList);
  }
  total(car:Car){
    return car.quantity * car.price;
  }
}
