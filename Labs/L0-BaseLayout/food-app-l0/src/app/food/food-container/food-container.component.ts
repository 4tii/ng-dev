import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { FoodItem } from '../foodItem';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  food: FoodItem[];
  selected : FoodItem;

  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    this.fs.getFood().subscribe(data => (this.food=data));
  }

  selectFood(f : FoodItem){
    this.selected= { ...f};
  }

  foodSaved(f: FoodItem){
    if(f.id){
      this.fs.putFood(f).subscribe(() => {
        let arr = this.food.find((item) => item.id == f.id);
        Object.assign(arr, f);
        this.food = [...this.food];
      });
    }else{
      this.fs.postFood(f).subscribe(() => {
        this.food.push(f)
        this.food = [...this.food];
      });
    }    
  }

  deleteFood(f: FoodItem){
    this.fs.deleteFood(f.id).subscribe(()=>{
      let arr = this.food.filter((item) => item.id != f.id);
      this.food = [...arr];
    })
  }

}
