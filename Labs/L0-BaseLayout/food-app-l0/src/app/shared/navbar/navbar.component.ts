import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';
import { NavItem } from './navItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // constructor(private http: HttpClient) {}
  constructor(private ns: NavService, private router:Router) { }

  navItems: NavItem[];

  ngOnInit(): void {    
    this.ns.getNavItems().subscribe(data => (this.navItems=data));
  }

  goTo(url: string){
    this.router.navigate([url]);
  }

}
