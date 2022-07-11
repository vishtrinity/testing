import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) }, { path: 'rxjsTrial', loadChildren: () => import('../rx-trial/rx-trial.module').then(m => m.RxTrialModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
