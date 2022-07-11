import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/core/services/authentication.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let authService:AuthenticationService;
  let h1:HTMLElement;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, UsersComponent ],
      providers:[AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    authService=TestBed.inject(AuthenticationService);
    h1=fixture.debugElement.query(By.css('h1')).nativeElement;
   

    fixture.detectChanges();
  }),

  it('should create', () => {
    expect(component).toBeTruthy();
  }),

  it('should return a user',()=>{
    // spyOn(authService,'getRegisteredUser').and.returnValue("user verified");
    let salary=component.getSalarySlip();
    
    expect(salary).toEqual("salary Slip");
    //expect(authService.getRegisteredUser).toHaveBeenCalled();
  })

  it("test h1",()=>{
    let button1=fixture.debugElement.query(By.css('#getUser'));
    button1.triggerEventHandler('click',{});
      fixture.detectChanges();
      expect(h1.textContent).toEqual(component.getSalarySlip())
    

   
  })
});
