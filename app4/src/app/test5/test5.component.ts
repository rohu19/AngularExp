import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component {
  person:FormGroup

  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient)
  {
    this.person = formBuilder.group({
    id:new FormControl('',Validators.required),
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    address: formBuilder.group({
      houseNo:new FormControl(),
      streetName:new FormControl(),
      })
  });
  
  }
  get id(){
    return this.person.get('id');
  }
  get firstName(){
    return this.person.get('firstName');
  }
  
  get lastName(){
    return this.person.get('lastName');
  }

  get address(){
    return this.person.get('address') as FormArray;
  }
  // save(){
  //   this.httpClient.post<any>('http://localhost:9090/person/personURL',this.person.value).subscribe(result=>{
  //     console.log(result);
  // }
  //   )}
save(){
    this.httpClient.post<any>('http://localhost:9090/person/personURL',this.person.value).subscribe(result=>{
    console.log(result);
  }
 )
 }
//  save(){
//   console.log(this.person.value);
// }
}
