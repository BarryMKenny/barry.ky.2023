import { NgModule } from "@angular/core";
import {MaximizeDirective} from "../directives/maximize.directive";
@NgModule({
  declarations: [MaximizeDirective],
  exports: [MaximizeDirective] //<-- Make sure to export it
})
export class MaximizeModule {}
