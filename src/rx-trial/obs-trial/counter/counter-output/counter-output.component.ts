
import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, scan } from 'rxjs';
import { ShareCounterDataService } from 'src/core/services/share-counter-data.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
  //changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class CounterOutputComponent implements OnInit {
  @Input()counter!:number;
  counter2!:number;
  counter3!:number;
 
  constructor(private sc:ShareCounterDataService, private store:Store<{counter:{counter:number}}>) { }
  @ViewChild('counterTag',{static:true})
  counterTag!: ElementRef;

  ngOnInit(): void {
    this.sc.bSubj.subscribe(counter=>this.counter2=counter)
    fromEvent(this.counterTag.nativeElement,'click')
    .pipe(scan((count:any)=>{return count+1;},0))
    .subscribe(data=>console.log(data))


    this.store.select('counter')
    .subscribe(data=>this.counter3=data.counter)
   
  }

//  ngDoCheck(): void {
//    console.log("A")
   
//   }

}
