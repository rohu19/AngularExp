import { ListAllBookingsComponent } from './list-all-bookings/list-all-bookings.component';
import { ListSpsComponent } from './list-sps/list-sps.component';
import { AddSpComponent } from './add-sp/add-sp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoginGuardService } from '../sp1-common-services/pre-login-guard.service';

const routes: Routes = [
{path:'add-sp',component: AddSpComponent,canActivate:[PreLoginGuardService]},
{path:'list-sps',component: ListSpsComponent,canActivate:[PreLoginGuardService]},
{path:'list-all-bookings',component: ListAllBookingsComponent,canActivate:[PreLoginGuardService]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpOwnerRoutingModule { }
