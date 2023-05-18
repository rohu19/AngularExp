import { SpOwnerModule } from './../sp-owner/sp-owner.module';
import { SpAdminModule } from './../sp-admin/sp-admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpCustomerRoutingModule } from './sp-customer-routing.module';
import { SpSearchComponent } from './sp-search/sp-search.component';
import { SpBookingComponent } from './sp-booking/sp-booking.component';
import { MybookingsComponent } from './mybookings/mybookings.component';


@NgModule({
  declarations: [
    SpSearchComponent,
    SpBookingComponent,
    MybookingsComponent
  ],
  imports: [
    CommonModule,
    SpCustomerRoutingModule,
    SpAdminModule,
    SpOwnerModule
  ]
})
export class SpCustomerModule { }
