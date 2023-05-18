import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
student:FormGroup;
constructor(private fromBuilder:FormBuilder,private httpClient:HttpClient){
this.student=fromBuilder.group({
  firstName:new FormControl('',Validators.required),

})
}
}
