import { ResetPasswordService } from './reset-password.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  status: boolean = false;
  message: string = '';
  resetPassword: FormGroup;
  constructor(private service: ResetPasswordService,
              private formBuilder: FormBuilder,
              private activatedRoute:ActivatedRoute){
  var email = activatedRoute.snapshot.paramMap.get('email');
  var activationCode = activatedRoute.snapshot.paramMap.get('activationCode');
  this.resetPassword = formBuilder.group({
    email: new FormControl(email),
    activationCode: new FormControl(activationCode),
    password: new FormControl('',Validators.required)

  });
  }
  get password()
  {
    return this.resetPassword.get('password');
  }
  save(){
    this.service.doReset(this.resetPassword).subscribe(
      r1 =>{
        this.status = r1.status;
        this.message = r1.message;
      }
    )
  }
}

// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { ResetPasswordService } from './reset-password.service';

// @Component({
//   selector: 'app-reset-password',
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.css']
// })
// export class ResetPasswordComponent {
//   status: boolean = false;
//   message: string = '';
//   resetPassword: FormGroup;
//   constructor(private service: ResetPasswordService,
//               private formBuilder: FormBuilder,
//               private activatedRoute:ActivatedRoute){
//   var email = activatedRoute.snapshot.paramMap.get('email');
//   var activationCode = activatedRoute.snapshot.paramMap.get('activationCode');
//   this.resetPassword = formBuilder.group({
//     email: new FormControl(email),
//     activationCode: new FormControl(activationCode),
//     password: new FormControl('',Validators.required)

//   });
//   }
//   get password()
//   {
//     return this.resetPassword.get('password');
//   }
//   save(){
//     this.service.doReset(this.resetPassword).subscribe(
//       r1 =>{
//         this.status = r1.status;
//         this.message = r1.message;
//       }
//     )
//   }

// }
