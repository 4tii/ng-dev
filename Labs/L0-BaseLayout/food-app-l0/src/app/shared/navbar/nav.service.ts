import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItem } from './navItem';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private http: HttpClient) { }

  getNavItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>("/assets/menuItems.json");
  }
}
