import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FoodItem } from './foodItem';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url = `${environment.api}food`;

  constructor(private http: HttpClient) { }

  getFood(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(this.url);
  }

  postFood(f: FoodItem): Observable<FoodItem>{
    return this.http.post<FoodItem>(this.url, f);
  }

  putFood(f: FoodItem): Observable<FoodItem>{
    return this.http.put<FoodItem>(`${this.url}/${f.id}`, f);
  }

  deleteFood(id: number): Observable<FoodItem>{
    return this.http.delete<FoodItem>(`${this.url}/${id}`);
  }

}
