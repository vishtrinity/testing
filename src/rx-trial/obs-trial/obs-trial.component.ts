import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { AsyncSubject, BehaviorSubject, mergeMap, connect,Connectable, connectable, from, fromEvent, interval, Observable, ObservableInput, of, range, refCount, ReplaySubject, share, shareReplay, Subject, Subscription, take, concatMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-obs-trial',
  templateUrl: './obs-trial.component.html',
  styleUrls: ['./obs-trial.component.scss']
})
export class ObsTrialComponent implements OnInit,OnDestroy,AfterViewInit {
  //model!:Observable<any>;
 
  coldSub1!:Subscription;
  coldSub2!:Subscription;
  coldSub3!:Subscription
  hotSub1!:Subscription;
  hotSub2!:Subscription;
  hotSub3!:Subscription;
  subj!:Subject<number>;
  bSubj!:BehaviorSubject<number>;
  rSubj!:ReplaySubject<number>;
  asyncSubj!:AsyncSubject<number>;
  coldObs!:Observable<number>;

  observer1={
    next:(x:number)=>console.log("observer1",x),
    error:(err: Error)=>console.log(err)
    
  }

  observer2={
    next:(x:number)=>console.log("observer2",x),
    error:(err: Error)=>console.log(err)
    
  }

  observer3={
    next:(x:number)=>console.log("observer3",x),
    error:(err: Error)=>console.log(err)
    
  }
  
  constructor() { }
 

  ngOnInit(): void {


    this.coldObs=interval(1000).pipe(take(4),switchMap(async (data) => {return data * 25}),share());
  
    //this.subj =new Subject<number>();
    this.coldObs.subscribe(this.observer1);
    setTimeout(()=>{
      this.coldObs.subscribe(this.observer2);
    },1000)
   
   this.coldObs.subscribe(this.observer3);
    //this.subj.next(108);
    
    // //this.coldObs.subscribe("muk",this.subj);
    // this.subj.next(109);

    // this.subj.subscribe(this.observer1);
    // this.subj.next(124);
    // this.subj.subscribe(this.observer2);
    // this.subj.next(125);
    // this.subj.subscribe(this.observer3);

    // this.subj.next(126);

    this.bSubj=new BehaviorSubject(2);
    this.rSubj=new ReplaySubject(6);
    this.asyncSubj=new AsyncSubject();
  
  }
  @ViewChild('apprx') hotButton:ElementRef<any> | undefined;

  ngAfterViewInit(){
    console.log(this.hotButton)
  }




  
  //hotObs=from(range(0,40)).pipe(concatMap(data=>interval(1000)),share());

  //hotObs2=interval(1000).pipe(share())
  
  hotObs2=interval(1000)
 


  
  
  
  cold1(){
    this.coldSub1=this.coldObs.subscribe(data=>console.log("cold1 ",data));
    
  }

  cold2(){
    this.coldSub2=this.coldObs.subscribe(data=>console.log("cold2 ",data));
    
  }

  cold3(){
    this.coldSub3=this.coldObs.subscribe(data=>console.log("cold3 ",data));
    
  }

  
  hot1(){
    //this.hotSub1=this.hotObs.subscribe(data=>console.log("hot1 ",data))
    this.hotSub1=this.hotObs2.subscribe(data=>console.log("hot1 ",data))
  }
 
  hot2(){
    //this.hotSub2=this.hotObs.subscribe(data=>console.log("hot2 ",data))
    this.hotSub2=this.hotObs2.subscribe(data=>console.log("hot2 ",data))
  }
  hot3(){
    //this.hotSub3=this.hotObs.subscribe(data=>console.log("hot3 ",data))
    this.hotSub3=this.hotObs2.subscribe(data=>console.log("hot3 ",data))
  }

  //hotObs2.connect();
  

  stop(){
    if(this.hotSub1)
    this.hotSub1.unsubscribe();
    
    if(this.hotSub2)
    this.hotSub2.unsubscribe();

    if(this.hotSub3)
    this.hotSub3.unsubscribe();

    if(this.coldSub1)
    this.coldSub1.unsubscribe();

    if(this.coldSub2)
    this.coldSub2.unsubscribe();

    if(this.coldSub3)
    this.coldSub3.unsubscribe();
    
    
   
  }

  ngOnDestroy(): void {
    this.coldSub1.unsubscribe();
    this.coldSub2.unsubscribe();
    this.coldSub3.unsubscribe();
    this.hotSub1.unsubscribe();
    this.hotSub2.unsubscribe();
    this.hotSub3.unsubscribe();
  }

}
