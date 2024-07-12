import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car-list/car';

const URL = 'https://66900d5ec0a7969efd9ac8da.mockapi.io/autos';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor(private http: HttpClient) { }
  public getAll() : Observable<Car[]>{
    return this.http.get<Car[]>(URL);
  }
}
