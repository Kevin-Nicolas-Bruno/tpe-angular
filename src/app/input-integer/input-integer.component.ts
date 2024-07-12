import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  constructor(){  }
  @Input()
  quantity:number;
  @Input()
  max:number;
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached : EventEmitter<string> = new EventEmitter<string>();


  upQuantity(): void{
  if(this.quantity < this.max){
    this.quantity++;
    this.cantidadChange.emit(this.quantity);
  }else{
    this.maxReached.emit("se alcanzo el maximo");
    }
}
  
downQuantity(): void{
  if(this.quantity>0)
    this.quantity--;
    this.cantidadChange.emit(this.quantity);
}
  }
