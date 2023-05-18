import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-test12',
  templateUrl: './test12.component.html',
  styleUrls: ['./test12.component.css']
})
export class Test12Component {
person: FormGroup;
constructor(private formBuilder: FormBuilder, private httpClient: HttpClient){
  this.person=formBuilder.group({
    firstName:new FormControl(),
    lastName:new FormControl(),
    age: new FormControl(), 
    address: formBuilder.group({
        houseNo:new FormControl(),
        streetName:new FormControl(),
        city:new FormControl()
    })
     
  });
}
  save(){
    this.httpClient.post<any>('http://localhost:9090/hello/person',this.person.value).subscribe(result=>{
    console.log(result);
    
    
  }
  )

}

}
