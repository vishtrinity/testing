import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateDirective } from './animate.directive';



@NgModule({
  declarations: [AnimateDirective],
  imports: [
    CommonModule
  ],
  exports:[AnimateDirective]
})
export class SharedModule { }
