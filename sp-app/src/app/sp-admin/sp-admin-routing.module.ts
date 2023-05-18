import { PreLoginGuardService } from './../sp1-common-services/pre-login-guard.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { LoginComponent } from './login/login.component';
import { SingnupComponent } from './singnup/singnup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PostLoginGuardService } from '../sp1-common-services/post-login-guard.service';

const routes: Routes = [
  {path:"signup",component:SingnupComponent,canActivate:[PostLoginGuardService]},
  {path:"login",component:LoginComponent,canActivate:[PostLoginGuardService]},
  {path:"forgotten-password",component:ForgottenPasswordComponent,canActivate:[PostLoginGuardService]},
  {path:"myprofile",component:MyprofileComponent,canActivate:[PreLoginGuardService]},
  {path:"logout",component:LogoutComponent,canActivate:[PreLoginGuardService]},
  {path:"change-password",component:ChangePasswordComponent,canActivate:[PreLoginGuardService]},
  {path:"passwordReset/:email/:activationCode",component:ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpAdminRoutingModule { }
