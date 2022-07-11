import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/core/services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  //SalarySlip:string | undefined;
  constructor(private authService:AuthenticationService) { }
salaryStatus:string | undefined;
  ngOnInit(): void {
    localStorage.setItem('user','ABC');
  }



  getSalarySlip():string{
    if(this.authService.getRegisteredUser()==='ABC'){
      console.log("inside getSalaryslip")
      console.log(this.authService.getRegisteredUser());
      this.salaryStatus='salary Slip';
    
    }
    else{
      this.salaryStatus="not recieved";
    
    }
    return this.salaryStatus;
    
  }

}
