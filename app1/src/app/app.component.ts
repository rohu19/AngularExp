import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {HttpClient}from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  person :FormGroup;
  persons :any;
  constructor(private formBuilder:FormBuilder,private httpClient : HttpClient)
  {
    this.person=formBuilder.group(
      {
        firstName: new FormControl()
      }
    );
  }
  ngOnInit()
  {
      this.load();
  }
  save()
  {
    this.httpClient.post<any>('person',this.person.value).subscribe(
      r1 =>{
        console.log("done");
        this.load()
      }
    )
  }
  
  
  load()
  {
    this.httpClient.get<any>('person').subscribe(
      r1=>
      {
        this.persons =r1;
      }
    )
  }
  }