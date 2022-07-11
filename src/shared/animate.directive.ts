import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {
  color={
    blue:'blue',
    red:'red'
  }
constructor(){}
  @HostBinding('style.color') fontColor!:string;
  @HostListener('click') mouseClick(){
    console.log(1)
    this.fontColor=this.color.blue;
    console.log(this.fontColor)
  }
 


}
