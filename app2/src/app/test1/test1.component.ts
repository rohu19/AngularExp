import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,FormControl}from '@angular/forms';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
employee:FormGroup;

constructor(private httpClient:HttpClient,private formBuilder:FormBuilder){
  this.employee=this.formBuilder.group({
    id:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    age:new FormControl(),
    salary:new FormControl()
  })
}
save(){
  this.httpClient.post<any>('http://localhost:9090/emp',this.employee.value).subscribe(r1=>{
  console.log(this.employee.value);
  
})
}
}
