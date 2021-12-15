import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FoodItem } from '../foodItem';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  @Input() food: FoodItem[];
  @Output() foodSelected: EventEmitter<FoodItem> = new EventEmitter();
  @Output() foodDelete: EventEmitter<FoodItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.food = changes["food"].currentValue;
  }

  selectFood(f: FoodItem){
    this.foodSelected.emit(f);
  }

  deleteFood(f: FoodItem){
    this.foodDelete.emit(f);
  }

  addFood(){
    let f : FoodItem;
    f = { name: "", price: 0, calories: 0 } as FoodItem;
    this.foodSelected.emit(f);
  }

}
