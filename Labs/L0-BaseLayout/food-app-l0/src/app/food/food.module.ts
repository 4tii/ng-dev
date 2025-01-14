import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FoodRoutingModule } from "./food-routing.module";
import { FoodContainerComponent } from "./food-container/food-container.component";
import { FoodEditComponent } from "./food-edit/food-edit.component";
import { FoodListComponent } from "./food-list/food-list.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [FoodContainerComponent, FoodListComponent, FoodEditComponent],
  imports: [CommonModule, FoodRoutingModule, ReactiveFormsModule, FormsModule, MaterialModule],
})
export class FoodModule {}
