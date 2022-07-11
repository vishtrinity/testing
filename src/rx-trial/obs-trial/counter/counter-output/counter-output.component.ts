
import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ShareCounterDataService } from 'src/core/services/share-counter-data.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
  
})
export class CounterOutputComponent implements OnInit {
  @Input()counter!:number;
  counter2!:number;
  constructor(private sc:ShareCounterDataService) { }
  ngOnInit(): void {
    this.sc.bSubj.subscribe(counter=>this.counter2=counter)
  }

//  ngDoCheck(): void {
//     this.counter2=this.sc.counter;
//   }

}
