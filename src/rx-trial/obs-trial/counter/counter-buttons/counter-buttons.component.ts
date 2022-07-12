import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShareCounterDataService } from 'src/core/services/share-counter-data.service';
import { decrement, increment, reset } from '../counter/state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {
  @Output()increment=new EventEmitter<void>();
  @Output()decrement=new EventEmitter<void>();
  @Output()reset=new EventEmitter();
  

  constructor(private sc:ShareCounterDataService, private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
    // this.increment=new EventEmitter<void>();
    // this.decrement=new EventEmitter();
    // this.reset=new EventEmitter();
  }

  onIncrement(){
    this.increment.emit();
  }

  onDecrement(){
    this.decrement.emit();
  }

  onReset(){
    this.reset.emit();
  }



  onIncrementInService(){
    this.sc.onIncrement();
  }

  onDecrementInService(){
    this.sc.onDecrement();
  }

  onResetInService(){
    this.sc.onReset();
  }


  onIncrementByStore(){
    this.store.dispatch(increment());
  }



  onDecrementByStore(){
    this.store.dispatch(decrement())
  }


  onResetByStore(){
    this.store.dispatch(reset())
  }

}
