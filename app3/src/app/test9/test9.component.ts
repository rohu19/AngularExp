import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test9',
  templateUrl: './test9.component.html',
  styleUrls: ['./test9.component.css']
})
export class Test9Component {
  results: string="";
constructor(private httpClient:HttpClient){

 }
 ngOnInit(){
  this.httpClient.get<any>('http://localhost:9090/hello/second').subscribe(r1=>{
   // console.log(r1);
   this.results=r1.message;
  });

 }
}
