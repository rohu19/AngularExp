import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test13',
  templateUrl: './test13.component.html',
  styleUrls: ['./test13.component.css']
})
export class Test13Component {
person: FormGroup;
constructor(private formBuilder:FormBuilder){
  this.person=formBuilder.group({
 firstName:new FormControl( '',Validators.required),
 lastName:new FormControl('',Validators.required),
 age:new FormControl('',Validators.required)
  });
}

get firstName(){
  return this.person.get('firstName');
}

get lastName(){
  return this.person.get('lastName');
}
get age(){
  return this.person.get('age');
}
save():boolean{
if(this.person.invalid){
  this.person.markAllAsTouched();
  
  return false;
}
  console.log(this.person.value);
  return true;
}
}

