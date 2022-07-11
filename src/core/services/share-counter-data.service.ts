import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareCounterDataService {
  counter=0;
  bSubj=new BehaviorSubject(this.counter);
  constructor() { }

  onIncrement(){
    this.bSubj.next(++this.counter);
  }

  onDecrement(){
    this.bSubj.next(--this.counter);
  }

  onReset(){
    this.counter=0;
    this.bSubj.next(this.counter);
  }

}
