import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpAdminRoutingModule } from './sp-admin-routing.module';
import { SingnupComponent } from './singnup/singnup.component';
import { LoginComponent } from './login/login.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import{ HttpClientModule} from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    SingnupComponent,
    LoginComponent,
    ForgottenPasswordComponent,
    MyprofileComponent,
    LogoutComponent,
    ChangePasswordComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    CommonModule,
    SpAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SpAdminModule { }
