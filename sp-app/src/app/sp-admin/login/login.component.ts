import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

login:FormGroup;
status:boolean=false;
loginMessage:string="";
constructor(private service : LoginService, formBuilder:FormBuilder){
  this.login=formBuilder.group({
    username:new FormControl('a@a.com',Validators.required),
    password:new FormControl('123',Validators.required)
    
  })
  
}
get username(){
  return this.login.get('username');
}
get password(){
  return this.login.get('password');
}

save(){
 if(this.login.invalid){
  this.login.markAllAsTouched();
  return;
 }
 this.service.doLogin(this.login).subscribe(
  r1=>{
    if(r1.status=='Login is Success'){
  this.status=true;
  sessionStorage.setItem('username',r1.username);
  sessionStorage.setItem('role',r1.role);
  }

  this.loginMessage=r1.status;
}
 );
}
}
