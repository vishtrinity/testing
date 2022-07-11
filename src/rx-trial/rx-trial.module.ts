import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxTrialRoutingModule } from './rx-trial-routing.module';
import { RxTrialComponent } from './rx-trial.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/core/core.module';
import { ObsTrialComponent } from './obs-trial/obs-trial.component';

import { SharedModule } from 'src/shared/shared.module';
import { CounterComponent } from './obs-trial/counter/counter/counter.component';
import { CounterOutputComponent } from './obs-trial/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './obs-trial/counter/counter-buttons/counter-buttons.component';




@NgModule({
  declarations: [
    RxTrialComponent,
    ObsTrialComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent
    
  ],
  imports: [
    CommonModule,
    RxTrialRoutingModule,FormsModule,SharedModule
  ]
  
})
export class RxTrialModule { }
