import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test14',
  templateUrl: './test14.component.html',
  styleUrls: ['./test14.component.css']
})
export class Test14Component {
person:FormGroup

constructor(private formBuilder: FormBuilder,private httpClient:HttpClient)
{
  this.person = formBuilder.group({
    id:new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    mobileNumber:new FormArray([ formBuilder.group({ 
      id:new FormControl(),
      mobileNumber:new FormControl(),
      serviceProvider:new FormControl()
    })])

  });

  // this.mobileNumber.push(formBuilder.group({ 
  //   mobileNumber:new FormControl(),
  //   serviceProvider:new FormControl 
  // }));

  // this.mobileNumber.push(formBuilder.group({ 
  //   mobileNumber:new FormControl(),
  //   serviceProvider:new FormControl 
  // }));

}

get mobileNumber(){
  return this.person.get('mobileNumber') as FormArray;
}

addNewMobileNumber($event:any){
  this.mobileNumber.push(this.formBuilder.group({ 
    id:new FormControl(),
    mobileNumber:new FormControl(),
    serviceProvider:new FormControl 
  }));
//$event.stopPropagation();
$event.preventDefault();
}

save(){
  console.log(this.person.value);
}

save1(){
  this.httpClient.post<any>('http://localhost:9090/person/data',this.person.value).subscribe(result=>{
  console.log(result);
}
)
}
 
}
