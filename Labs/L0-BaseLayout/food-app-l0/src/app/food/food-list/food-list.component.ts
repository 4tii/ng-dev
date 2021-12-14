import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../foodItem';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  @Input() food: FoodItem[];
  @Output() foodSelected: EventEmitter<FoodItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectFood(f: FoodItem){
    this.foodSelected.emit(f);
  }

}
