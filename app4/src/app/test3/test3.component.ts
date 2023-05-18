import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']

  
})
export class Test3Component {
  person: FormGroup;
  
  result:any;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient){
    this.person=formBuilder.group({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      age: new FormControl('',Validators.required), 
      email: new FormControl('',Validators.email), 
      mobile: new FormControl('',Validators.required), 
      salary: new FormControl('',Validators.required), 
      address: new FormControl('',Validators.required)   
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
  get email(){
    return this.person.get('email');
  }
  get mobile(){
    return this.person.get('mobile');
  }
  get salary(){
    return this.person.get('salary');
  }
  get address(){
    return this.person.get('address');
  } 
  save(){
      this.httpClient.post<any>('http://localhost:9090/person/data',this.person.value).subscribe(r=>{
      console.log(r);
    });
    
  }
  }
  