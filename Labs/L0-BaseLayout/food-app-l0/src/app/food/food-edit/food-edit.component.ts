import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FoodItem } from '../foodItem';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Input() food : FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doSave(){
    this.saveFood.emit(this.food);
  }


}
