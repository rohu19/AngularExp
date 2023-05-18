import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-test15',
  templateUrl: './test15.component.html',
  styleUrls: ['./test15.component.css']
})
export class Test15Component {
email: any;
getPerson() {
throw new Error('Method not implemented.');
}
/*email="hey";
result:any;

getPerson(){
 //interact to the rest api and get the perosn and assing to the results



 
}  
}*/

  person!: FormGroup;


constructor(private httpClient:HttpClient){

}

save(){
  this.httpClient.post<any>('http://localhost:9090/person/data',this.person.value).subscribe(result=>{
  console.log(result);
}
)
}



}


// change doing in the httml class to refelect to typeScript class
//ngModel required formsModule to excute program