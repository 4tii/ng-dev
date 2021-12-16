import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodItem } from '../foodItem';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Input() food : FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  foodForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.foodForm = this.fb.group({
      id: [this.food.id],
      name: [this.food.name, [Validators.required, Validators.minLength(3)]],
      price: [this.food.price],
      calories: [this.food.calories]
    });
  }

  doSave(){
    this.saveFood.emit(this.food);
  }

  saveForm(form: any){
    this.saveFood.emit(form.value);
  }


}
