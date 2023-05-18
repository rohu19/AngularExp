import { Component } from '@angular/core';

@Component({
  selector: 'app-test8',
  templateUrl: './test8.component.html',
  styleUrls: ['./test8.component.css']
})
export class Test8Component {
  students=[
    {
      sid:101,
      firstName:"rohan",
      lastName:"kumar",
      age:22,
      skills:["C","C++","JAVA","DSA"]
    },
    {
      
      sid:102,
      firstName:"priya",
      lastName:"kumari",
      age:20,
      skills:["PYTHON","JAVA"]
    },
    {
      sid:103,
      firstName:"BABU",
      lastName:"Baghel",
      age:19,
      skills:["CARATE","ZUDO","Commando","BOXER"]
    }
  ]
}
