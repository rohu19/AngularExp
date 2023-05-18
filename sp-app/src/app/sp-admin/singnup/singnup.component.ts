import { SignupService } from './signup.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent {
  user: FormGroup;
  status: boolean = false;
  constructor(private Service: SignupService, 
              private formBuilder: FormBuilder)
 {
  this.user = formBuilder.group({
    
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)

  });
              
            
}

get firstName()
{
  return this.user.get('firstName');
}
get lastName()
{
  return this.user.get('lastName');
}
get email()
{
  return this.user.get('email');
}
get password()
{
  return this.user.get('password');
}
get mobileNumber()
{
  return this.user.get('mobileNumber');
}
get role()
{
  return this.user.get('role');
}

save(){
if(this.user.invalid){
  this.user.markAllAsTouched();
  return;
} 
  this.Service.doSignup(this.user).subscribe(
    r1 => {
      console.log(r1);
      this.status = true;
    }
  )
}

}
// user:FormGroup;
// status:boolean =false;

// constructor(private  service:SignupService,private  formBuilder:FormBuilder) {
//   this.user=formBuilder.group({

// firstName: new FormControl('',Validators.required),
// lastName:new FormControl('',Validators.required),
// mobileNumber:new FormControl('',Validators.required),
// email:new FormControl('',Validators.required),
// password:new FormControl('',Validators.required),
// role:new FormControl('',Validators.required)
//   });
// }


// get firstName(){
//   return this.user.get('firstName');
// }
// get lastName(){
//   return this.user.get('lastName');
// }
// get mobileNumber(){
//   return this.user.get('mobileNumber');
// }
// get email(){
//   return this.user.get('email');
// }
// get password(){
//   return this.user.get('password');
// }
// get role(){
//   return this.user.get('role');
// }

// save(){

//   if(this.user.invalid){
//     this.user.markAllAsTouched();
//     return;
//   }
  
//   this.service.doSignup(this.user).subscribe(
//     r1=>{
//       console.log(r1);
//       this.status=true;
//     }
//   )
// }
// }


