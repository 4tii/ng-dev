import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from './foodItem';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>("/assets/food.json");
  }
}
