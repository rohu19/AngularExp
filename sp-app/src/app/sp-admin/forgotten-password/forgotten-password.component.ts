import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ForgottenPasswordService } from './forgotten-password.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent {

  forgottenPassword:FormGroup;
  status:boolean=false;
  message:string='';
  constructor(private service:ForgottenPasswordService,private formBuilder:FormBuilder){
    this.forgottenPassword=formBuilder.group({
      email:new FormControl('',Validators.required
      )
    });
  }


  get email(){
    return this.forgottenPassword.get('email');
  }


  save(){
    this.service.save(this.forgottenPassword).subscribe(
      r1=>{
       this.status=r1.status;
       this.message=r1.message;
      }
    )
  }
}
