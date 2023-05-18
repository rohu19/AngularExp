import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder ,FormControl} from '@angular/forms';


@Component({
  selector: 'app-test11',
  templateUrl: './test11.component.html',
  styleUrls: ['./test11.component.css']
})
export class Test11Component {
student:FormGroup;

constructor (private httpClient:HttpClient, private formBuilder:FormBuilder ){
  this.student=this.formBuilder.group({
    id:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl()
   })
  }
  save(){
    this.httpClient.post<any>('http://localhost:9090/hello',this.student.value).subscribe(r1=>{
    console.log(this.student.value);
    
  }
  )
  }
}
