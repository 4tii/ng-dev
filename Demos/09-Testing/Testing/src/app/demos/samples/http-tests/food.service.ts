import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FoodItem } from './food.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  private items: FoodItem[] = [];
  private Items: BehaviorSubject<FoodItem[]> = new BehaviorSubject(this.items);

  initData() {
    this.httpClient
      .get<FoodItem[]>(`${environment.api}food`)
      .subscribe((data) => {
        this.setState(data);
      });
  }

  private setState(data: any) {
    this.items = data;
    this.Items.next(this.items);
  }

  getItems(): Observable<FoodItem[]> {
    return this.Items.asObservable();
  }

  deleteItem(item: FoodItem): Observable<boolean> {
    this.items = this.items.filter((f) => this.isEquivalent(f, item) == false);
    this.Items.next(this.items);
    return of(true);
  }

  isEquivalent(a: any, b: any) {
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
      return false;
    }

    for (const prop of aProps) {
      if (a[prop] !== b[prop]) {
        return false;
      }
    }
    return true;
  }

  addItem(item: FoodItem): Observable<boolean> {
    this.items.push(item);
    this.Items.next(this.items);
    return of(true);
  }
}
