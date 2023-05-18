import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.css']
})
export class Test6Component {
 address:FormGroup;

 constructor(private formBuilder: FormBuilder,private httpClient:HttpClient)
 {
  this.address=formBuilder.group({
    id:new FormControl('',Validators.required),
    houseNo:new FormControl('',Validators.required),
    streetName:new FormControl('',Validators.required)  
  })
 }
get id(){
  return this.address.get('id');
}
get houseNo(){
  return this.address.get('houseNo');
}
get streetName(){
  return this.address.get('streetName');
}

 save(){
   this.httpClient.post<any>('http://localhost:9090/address/addressURL',this.address.value).subscribe(result=>{
   console.log(result);
 }
)
}

/*save(){
  console.log(this.address.value);
}*/
}


