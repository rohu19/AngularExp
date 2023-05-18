import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test10',
  templateUrl: './test10.component.html',
  styleUrls: ['./test10.component.css']
})
export class Test10Component {
student:any;
constructor(private httpClient:HttpClient){
 
}
ngOnInit(){
  this.httpClient.get<any>('http://localhost:9090/hello/third').subscribe(r1=>{
   
   this.student=r1;
  });
}
}
