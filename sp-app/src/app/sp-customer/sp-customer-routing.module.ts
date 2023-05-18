import { MybookingsComponent } from './mybookings/mybookings.component';
import { SpBookingComponent } from './sp-booking/sp-booking.component';
import { SpSearchComponent } from './sp-search/sp-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoginGuardService } from '../sp1-common-services/pre-login-guard.service';

const routes: Routes = [
  {path:'sp-search',component:SpSearchComponent,canActivate:[PreLoginGuardService]},
  {path:'sp-booking',component:SpBookingComponent,canActivate:[PreLoginGuardService]},
  {path:'mybookings',component:MybookingsComponent,canActivate:[PreLoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpCustomerRoutingModule { }
