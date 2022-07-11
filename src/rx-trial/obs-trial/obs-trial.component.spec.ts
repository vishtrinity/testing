import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsTrialComponent } from './obs-trial.component';

describe('ObsTrialComponent', () => {
  let component: ObsTrialComponent;
  let fixture: ComponentFixture<ObsTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
