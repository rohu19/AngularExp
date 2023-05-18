import { Component } from '@angular/core';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.css']
})
export class Test7Component {
 names=["abc","test","hello","jan"];
 prices=[34.8,85.6,74.6,95.3,1006,74.2];



 persons=[
  {
    id:1,
    firstName:"rohan",
    lastName:"kumar",
    age:22
  },
  {
    id:2,
    firstName:"Shreya",
    lastName:"Singh",
    age:21
  },
  {
    id:3,
    firstName:"Pooja",
    lastName:"Baghel",
    age:23
  }

 ]
}
