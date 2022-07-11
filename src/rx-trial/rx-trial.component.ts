import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { filter, firstValueFrom, from, fromEvent, Observable, of, toArray } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { User } from './models/user';

@Component({
  selector: 'app-rx-trial',
  templateUrl: './rx-trial.component.html',
  styleUrls: ['./rx-trial.component.scss']
  
 
})
export class RxTrialComponent implements OnInit {
  userArr!: User[];
  originalUserArr!:User[];
  radioChoice!:string;
  searchTerm!: string;
arr1=[343,656,2232,3435,6576,2423,2113,677];
  obs1!: Observable<any>;
  prom1!:Promise<number>;
  obs3!: Observable<any>;
  obs4!: Observable<any>;
  obs5!: Observable<any>;
  obs6!: Observable<any>;
  //obs1!: Observable<any>;

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getUserData()
    .subscribe(data=>{this.userArr=data,
      this.originalUserArr=this.userArr;
      console.log(this.userArr)});
    
  }

  // ngOnChanges(){
  //   if(this.searchTerm=="")
  //   this.ds.getUserData()
  //   .subscribe(data=>this.userArr=data)

  //   else{
  //     this.userArr.filter((item: { name: string; })=>{
  //      return item.name.toLocaleLowerCase()==this.searchTerm.toLocaleLowerCase()
        
  //     })
      
  //   }
  // }

  fromArr(){

    this.obs1=from(this.arr1);

  }

  fromPromise(){
this.prom1=firstValueFrom(from(this.arr1)).then(val=>val)

  }

  fromArgs(){
    this.obs3=of(23,455,32323,23111);
  }


  fromExEvent(event:any){
    this.obs4=fromEvent(event,'click')
    

  }

  fromAsync(){}

  fromSync(){}


  searchArr(){
    console.log(this.radioChoice)
    this.userArr=this.originalUserArr;
    // if(this.userArr.length){
  if(this.searchTerm!=""){
  if(this.radioChoice=='byName')
  this.userArr=this.userArr.filter(userData=>{ return userData.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())
  })

  if(this.radioChoice=="byId")
  this.userArr=this.userArr.filter(userData=>{ return userData.id==(this.searchTerm)
  })

  if(this.radioChoice=="byUsername")
  this.userArr=this.userArr.filter(userData=>{ return userData.username.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())
  })

  
    
  }else{
    this.userArr=this.originalUserArr;
   }

 //}


console.log(this.userArr)

  }
}
