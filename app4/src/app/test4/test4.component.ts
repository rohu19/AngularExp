import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component {
  email: any;  

constructor(private httpClient:HttpClient){

}
  getPerson()
  { 
    this.httpClient.get<any>('http://localhost:9090/person/search/'+ this.email).subscribe(
      result => {
        console.log(result);
      }
    )
}
}
