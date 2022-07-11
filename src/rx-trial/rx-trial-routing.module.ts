import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { interval, Observable, timer } from 'rxjs';
import { ObsTrialComponent } from './obs-trial/obs-trial.component';
import { RxTrialComponent } from './rx-trial.component';

const routes: Routes = [{ path: '', component: RxTrialComponent },
{ path: 'obsTrial', component: ObsTrialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxTrialRoutingModule { 




}
