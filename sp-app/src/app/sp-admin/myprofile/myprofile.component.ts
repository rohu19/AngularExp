import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyprofileService } from './myprofile.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
user: any;
status:boolean=false;
message:string='';
userForm:FormGroup;
constructor(private service:MyprofileService,formBuilder:FormBuilder){
  this.userForm=formBuilder.group({
 id:new FormControl(),
 firstName:new FormControl('',Validators.required),
 lastName:new FormControl('',Validators.required),
 email:new FormControl('',Validators.required),
 mobileNumber:new FormControl('',Validators.required),
 role:new FormControl('',Validators.required),
password:new  FormControl(),
activationCode:new FormControl(),
status:new FormControl()
  });

}
ngOnInit(){
  var email=sessionStorage.getItem('username')
  this.service.readUser(email).subscribe(r1=>{
    console.log(r1);
    this.user=r1;


    this.userForm.patchValue(this.user);
    // console.log(this.userForm.value);
  });
}




get firstName()
{
  return this.userForm.get('firstName');
}
get lastName()
{
  return this.userForm.get('lastName');
}
get email()
{
  return this.userForm.get('email');
}

get mobileNumber()
{
  return this.userForm.get('mobileNumber');
}
get role()
{
  return this.userForm.get('role');
}
save(){
  this.service.save(this.userForm).subscribe(r1=>{
   this.status=true;
    this.message="Update Successfully";
    this.user=r1;
  })
  }

  resetStatus(){
    this.status=false;
    this.message="";
  }
}

