import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/core/services/authentication.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let authService:AuthenticationService;
  let h1:ElementRef;

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
    h1=fixture.debugElement.query(h1).nativeElement;
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
});
