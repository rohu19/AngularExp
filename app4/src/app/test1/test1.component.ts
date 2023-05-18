import { Component } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
 constructor(private httpClient:HttpClient){

 }
 ngOnInit(){
  this.httpClient.get<any>('http://localhost:9090/hello').subscribe(r1=>{
    console.log(r1);
  });
 }
}
