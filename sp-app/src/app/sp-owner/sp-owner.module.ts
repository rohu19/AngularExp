import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpOwnerRoutingModule } from './sp-owner-routing.module';
import { AddSpComponent } from './add-sp/add-sp.component';
import { ListSpsComponent } from './list-sps/list-sps.component';
import { ListAllBookingsComponent } from './list-all-bookings/list-all-bookings.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddSpComponent,
    ListSpsComponent,
    ListAllBookingsComponent
  ],
  imports: [
    CommonModule,
    SpOwnerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SpOwnerModule { }
