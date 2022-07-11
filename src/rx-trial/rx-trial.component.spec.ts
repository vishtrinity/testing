import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxTrialComponent } from './rx-trial.component';

describe('RxTrialComponent', () => {
  let component: RxTrialComponent;
  let fixture: ComponentFixture<RxTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
