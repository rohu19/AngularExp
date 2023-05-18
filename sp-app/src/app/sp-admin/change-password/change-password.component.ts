import { ChangePasswordService } from './change-password.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {


  changePassword:FormGroup;
  message:string="";
  status:boolean=false;
  constructor(private service: ChangePasswordService,private formBuilder:FormBuilder){
    this.changePassword=formBuilder.group({
      email:new  FormControl(),
      oldPassword:new  FormControl('',Validators.required),
      newPassword:new  FormControl('',Validators.required),

    });
  }

get oldPassword(){
  return this.changePassword.get('oldPassword');
}
get newPassword(){
  return this.changePassword.get('oldPassword');
}

save(){
  if(this.changePassword.invalid){
    this.changePassword.markAllAsTouched;
    return;
  }
  var email=sessionStorage.getItem('username');
  this.changePassword.value.email=email;
  this.service.doChangePassword(this.changePassword).subscribe(
    r1=>{
      this.status=r1.status;
      this.message=r1.message;
    }
  )
}


}
