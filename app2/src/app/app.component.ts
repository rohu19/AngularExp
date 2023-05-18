import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  person:FormGroup;
  persons:any;
  constructor(private client:HttpClient,private formBuilder:FormBuilder){
    this.person=formBuilder.group(
      {
              firstName:new FormControl(),
              lastName:new  FormControl(),
              emailId:new FormControl()
      }
    );
    this.readAll();
  }

  save(){
    this.client.post<any>('person',this.person.value).subscribe(
      r1=>{
        console.log('hey babe');
       this.readAll();
      }
    )
  }



  readAll(){
    this.client.get<any>('person').subscribe(
      r1=>{
       this.persons=r1;
       
      }
    )
  }
}
